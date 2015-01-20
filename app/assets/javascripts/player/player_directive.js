angular.module('player_direcive',[])
.directive('jcPlayer', function(){
  return {
    restritc: 'A',
    scope: {
      medium: '='
    },
    templateUrl: 'player-template.html'
  };
})
