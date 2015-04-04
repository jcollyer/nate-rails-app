angular.module('player-controls-directive', [])
.directive('jcPlayerControls', function(PlayerService){
  return {
    restrict: 'A',
    templateUrl: 'player-controls-template.html',
    controller: 'PlayerController',
    scope: {
      hide: '=',
      showProgress: '='
    },
    link: function(scope, element, attrs){
      var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );

      PlayerService.playing = false;
      scope.currentSpeed = "1.0";

      scope.progress = function(){
        return scope.showProgress;
      };

      scope.togglePlay = function() {
        PlayerService.togglePlay();
      };

      scope.goBack = function() {
        PlayerService.goBack();
      };

      scope.toggleMute = function() {
        PlayerService.toggleMute();
      };

      scope.activeSpeed  = function(speed) {
        PlayerService.setPlaybackRate(speed);
        scope.currentSpeed = PlayerService.getPlaybackRate();
      };

      scope.closePlayer = function() {
        PlayerService.pause();
        playerWrapper.removeClass("opened");
      }

    }
  };
});
