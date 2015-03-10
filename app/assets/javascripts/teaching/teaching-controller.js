angular.module('teaching-controller',[])
.controller('TeachingController', function($scope, $rootScope, PlayerService){

  $scope.clickTeaching = function(mp3) {
    var teachingName = angular.element( document.querySelector( '.lesson-mod-info p' ) );
    var download = angular.element( document.querySelector( '.button-download' ) );
    var readAlong = angular.element( document.querySelector( '.button-read-along' ) );
    var podcast = angular.element( document.querySelector( '.button-podcast' ) );
    var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );

    var teaching = this.teaching;
    var mp3 = teaching.mp3;
    var name = teaching.name;
    var refurl = teaching.refurl;
    var podcasturl = teaching.podcasturl;
    // var biblebookname = teaching.


    $rootScope.$broadcast('setTrack', mp3);

    var playPause = angular.element( document.querySelector( '#play-pause' ) );
    playPause.addClass("button-pause").removeClass("button-play");


    teachingName.html(name);
    download.attr({"href":mp3,"download":name});
    readAlong.attr("href", refurl);
    podcast.attr("href", podcasturl);
    playerWrapper.css("display","block");

  };

  $scope.selected = function(teaching) {
    if (PlayerService && PlayerService.getTrack()){
      console.log(PlayerService.getTrack().toString());
      return teaching.mp3 === PlayerService.getTrack().toString();
    }
  };

});
