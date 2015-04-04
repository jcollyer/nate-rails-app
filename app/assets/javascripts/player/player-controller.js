angular.module('player-controller',[])
.controller('PlayerController', [ '$scope', '$interval', 'PlayerService', 'NateService', function($scope, $interval, PlayerService, NateService){
  var PlayerController = this;
  $scope.playing = true;
  $scope.muted = false;
  $scope.currentTime = 0;

  var loader = angular.element( document.querySelector( '#loader' ) );
  var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );


  Object.keys(PlayerService).forEach(function(key) {
    $scope[key] = PlayerService[key];
  });
  PlayerService.setEventCallbacks('controls', {
    audioReadyCallback: function() {
      $scope.duration = PlayerService.getElement().duration;
      PlayerService.play();
    },
    playingCallback: function() {
      loader.css("display","none");
      playerWrapper.addClass("opened");
      // PlayerService.playing = true;
      $scope.playing = true;

      $interval.cancel(stop);
      stop = $interval(function(){
        $scope.getSeconds = function() {
          return PlayerService.getElement().currentTime;
        }
      }, 100);
    },
    pausedCallback: function() {
      $scope.playing = false;
    },
    mutedCallback: function() {
      $scope.muted = PlayerService.getMuteSetting();
    }
  });
}]);
