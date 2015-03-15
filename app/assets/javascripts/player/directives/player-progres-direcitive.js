angular.module('player-progress-directive',[])
.directive('jcPlayerProgress', function(PlayerService, $interval){
  return {
    restrict: 'A',
    templateUrl: 'player-progress-template.html',
    scope: {},
    link: function(scope, element, attr){

      var audioElement = PlayerService.getElement();
      var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );
      var instance = {};
      var playHead = {
       mdown:false
      };
      var load, stop;

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
        var duration = PlayerService.getDuration();
        var xoffset = e.offsetX || e.layerX;
        var seconds = (xoffset / e.currentTarget.clientWidth) * duration;
        // debugger;
        PlayerService.setSeconds(e, xoffset, playerWrapper);
        audioElement.currentTime = PlayerService.getSeconds();
        scope.progress = PlayerService.getProgress();
      };


      scope.goToVideoPosition = function(e) {
        var mouseClientX = e.clientX - ( Math.floor(progressContainer[0].getBoundingClientRect().left) - 7);
        VideoService.setSeconds(e, mouseClientX, videoElement)
        videoElement.currentTime = VideoService.getSeconds();
        scope.currentTime = VideoService.getSeconds();
        scope.progress = VideoService.getProgress();
      };

      PlayerService.setEventCallbacks('progress', {
        ladingCallback: function() {
          $interval.cancel(load);
          load = $interval(function() {
            scope.loaded = PlayerService.getBuffered();
          }, 500);
        },
        playingCallback: function() {
          $interval.cancel(stop);
          stop = $interval(function(){
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
