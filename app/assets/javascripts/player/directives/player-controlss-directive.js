angular.module('player-controls-directive', [])
.directive('jcPlayerControls', function(PlayerService){
  return {
    restrict: 'A',
    templateUrl: 'player-controls-template.html',
    scope: {
      hide: '='
    },
    link: function(scope, element, attrs){

      scope.togglePlay = function() {
        PlayerService.togglePlay();
      };

    }
  };
});
