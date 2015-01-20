angular.module('player-controls-directive', [])
.directive('jcPlayerControls', function(){
  return {
    require: 'A',
    templateUrl: 'player-controls-template.html'
  }
});
