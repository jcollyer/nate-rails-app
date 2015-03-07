angular.module('player-controller',[])
.controller('PlayerController', function($scope, PlayerService, NateService){
  var PlayerController = this;
  $scope.playing = true;


  Object.keys(PlayerService).forEach(function(key) {
    $scope[key] = PlayerService[key];
  });
  PlayerService.setEventCallbacks('controls', {
    // videoReady: function() {
    //   $scope.duration = PlayerService.getElement().duration;
    // },
    playingCallback: function() {

      // $interval.cancel(stop);
      // stop = $interval(function(){
      //   $scope.currentTime = PlayerService.getElement().currentTime;
      //   PlayerService.setScrubTime(PlayerService.getCurrentTime());
      // }, 500);

      $scope.playing = true;

    },
    pausedCallback: function() {
      $scope.playing = false;
      // $interval.cancel(stop);
      // stop = $interval(function(){
      //   $scope.currentTime = PlayerService.getScrubTime();
      // }, 100);
    }
    // speedsCallback: function() {
    //   var speeds = { 1: 2, 2: 4, 4: 8, 8: 0.125, 0.125: 0.25, 0.25: 0.5, 0.5: 1};

    //   PlayerService.getElement().playbackRate = speeds[PlayerService.getElement().playbackRate] || 1;
    //   $scope.speed = PlayerService.getElement().playbackRate;

    //   // i want to do this better
    //   if ($scope.speed == 0.125) {
    //     $scope.speed = "1/8";
    //   } else if ($scope.speed == 0.25) {
    //     $scope.speed = "1/4";
    //   } else if ($scope.speed == 0.5) {
    //     $scope.speed = "1/2";
    //   };
    // },
    // endedCallback: function() {
    //   // progressBall.css("display","none");
    //   // $interval.cancel(stop);
    //   stop = null;
    //   PlayerService.playing = false;
    //   $scope.playing = false;
    // },
    // mutedCallback: function() {
    //   // $scope.muted = PlayerService.getMuteSetting();
    // }
  });

})
