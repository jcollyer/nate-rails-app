angular.module('player-directive',[])
.directive('jcPlayer', function(PlayerService){
  return {
    restritc: 'A',
    replace: true,
    templateUrl: 'player-template.html',
    controller: 'PlayerController',
    scope: {
      mp3: '='
    },
    link: function(scope, element, attr) {

    }
  };
})
