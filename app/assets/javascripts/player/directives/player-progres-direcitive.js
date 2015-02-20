angular.module('player-progress-directive',[])
.directive('jcPlayerProgress', function(PlayerService, $interval){
  return {
    restrict: 'A',
    templateUrl: 'player-progress-template.html',
    scope: {},
    link: function(scope, element, attr){


      PlayerService.setEventCallbacks('progress', {
        // ladingCallback: function() {
        //   $interval.cancel(load);
        //   load = $interval(function() {
        //     scope.loaded = PlayerService.getBuffered();
        //   }, 500);
        // },
        playingCallback: function() {
          $interval.cancel(stop);
          stop = $interval(function(){
            scope.progress = PlayerService.getProgress();
          }, 500);
        }
      });



    }
  }
})
