angular.module('teaching-controller',[])
.controller('TeachingController', function($scope, $rootScope, PlayerService){

  $scope.clickTeaching = function(mp3) {
    var title = angular.element( document.querySelector( '.lesson-mod-info' ) );
    var download = angular.element( document.querySelector( '.button-download' ) );
    var readAlong = angular.element( document.querySelector( '.button-read-along' ) );
    var podcast = angular.element( document.querySelector( '.button-podcast' ) );
    var playerWrapper = angular.element( document.querySelector( '#player-wrapper' ) );
    var teaching = this.teaching;
    var id = teaching.id;
    var mp3 = teaching.mp3;
    var name = teaching.name;
    var refurl = teaching.refurl;
    var podcasturl = teaching.podcasturl;

    //refactor this to use PlayerService.setTrack(mp3) or something
    // debugger;
    $rootScope.$broadcast('setTrack', mp3);

    var playPause = angular.element( document.querySelector( '#play-pause' ) );
    playPause.addClass("button-pause").removeClass("button-play");
    // var mainAudio = document.getElementById("main-audio");
    // mainAudio.setAttribute('src',mp3);
    // mainAudio.play();



    // title.html("<h1>"+scope.biblebookname+"</h1><p>"+name+"</p>");

    download.attr({"href":mp3,"download":name});
    readAlong.attr("href", refurl);
    podcast.attr("href", podcasturl);
    playerWrapper.css("display","block");

  };

  // $scope.selected = function(teaching) {
  //   if (PlayerService && PlayerService.getTrack()){
  //     debugger;
  //     return teaching.mp3 === PlayerService.getTrack().toString();
  //   }
  // };

});
