angular.module('player-controls-directive', [])
.directive('jcPlayerControls', function(PlayerService){
  return {
    restrict: 'A',
    templateUrl: 'player-controls-template.html',
    controller: 'PlayerController',
    scope: {
      hide: '='
    },
    link: function(scope, element, attrs){
      PlayerService.playing = false;
      scope.currentSpeed = "1.0";

      scope.togglePlay = function() {
        PlayerService.togglePlay();
      };

      scope.goBack = function() {
        var currentTime = PlayerService.getCurrentTime();
        var newTime = currentTime - 30;
        PlayerService.setCurrentTime(newTime);
      };

      scope.toggleMute = function() {
        PlayerService.toggleMute();
      }

      scope.activeSpeed  = function(speed) {
        PlayerService.setPlaybackRate(speed);
        scope.currentSpeed = PlayerService.getPlaybackRate();
      }

    }
  };
});
