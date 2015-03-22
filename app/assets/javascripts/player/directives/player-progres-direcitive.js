angular.module('player-progress-directive',[])
.directive('jcPlayerProgress', function(PlayerService, $interval){
  return {
    restrict: 'A',
    templateUrl: 'player-progress-template.html',
    scope: {},
    link: function(scope, element, attr){

      var audioElement = PlayerService.getElement();
      var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );
      var progressWrapper = angular.element( document.querySelector( '#audio-progress-container' ) );
      var instance = {};
      var playHead = {
       mdown:false
      };
      var load, stop, time;

      scope.beginScrub = function(e) {
        playHead.mdown = true;
        scope.isScrubbing = true;
        PlayerService.setIsScrubbing(scope.isScrubbing);
        position_to_time(e);
        if (!audioElement.paused) {
          instance.startAgain = true;
          PlayerService.pause();
        } else {
          instance.startAgain = false;
        };
      };

      playerWrapper.on("mouseup", function(e) {
        scope.isScrubbing = false;
        PlayerService.setIsScrubbing(scope.isScrubbing);
        if (playHead.mdown) {
          playHead.mdown = false;
          if (instance.startAgain) {
            instance.startAgain = false;
            PlayerService.play();
          };
        };
      });

      playerWrapper.on("mousemove", function(e) {
        if (playHead.mdown) {
          position_to_time(e);
        };
      });

      var position_to_time = function(e) {
        scope.goToAudioPosition(e);
      };

      scope.goToAudioPosition = function(e) {
        var mouseClientX = e.clientX - ( Math.floor(progressWrapper[0].getBoundingClientRect().left) - 7);
        // console.log("e.clientX: ",e.clientX,"progressWrapper: ",Math.floor(progressWrapper[0].getBoundingClientRect().left) - 7,"e: ",e)
        PlayerService.setSeconds(e, mouseClientX, progressWrapper);
        audioElement.currentTime = PlayerService.getSeconds();
        scope.progress = PlayerService.getProgress();
      };

      PlayerService.setEventCallbacks('progress', {
        audioReadyCallback: function() {
          scope.duration = PlayerService.getElement().duration;
        },
        ladingCallback: function() {
          $interval.cancel(load);
          load = $interval(function() {
            scope.loaded = PlayerService.getBuffered();
          }, 500);
        },
        playingCallback: function() {

          $interval.cancel(stop);
          stop = $interval(function(){
            scope.currentTime = PlayerService.getElement().currentTime;
            scope.progress = PlayerService.getProgress();
          }, 500);
        },
        pausedCallback: function() {
          $interval.cancel(stop);
        }
      });

    }
  }
})
