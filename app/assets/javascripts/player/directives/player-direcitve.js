angular.module('player-direcive',[])
.directive('jcPlayer', function(){
  return {
    restritc: 'A',
    scope: {
      medium: '='
    },
    templateUrl: 'player-template.html'
    // template: 'such such template!'
  };
})
