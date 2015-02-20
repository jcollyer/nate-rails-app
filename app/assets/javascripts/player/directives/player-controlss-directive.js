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

      scope.togglePlay = function() {
        PlayerService.togglePlay();
      };

      scope.goBack = function() {
        debugger;
      };

    }
  };
});
