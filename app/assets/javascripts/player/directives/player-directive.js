angular.module('player-directive',[])
.directive('jcPlayer', function(PlayerService){
  return {
    restritc: 'A',
    replace: true,
    templateUrl: 'player-template.html',
    controller: 'PlayerController',
    scope: {
      medium: '='
    },
    link: function(scope, element, attr) {
      var audioElement = element[0];
      PlayerService.setElement(audioElement);
    }
  };
})
