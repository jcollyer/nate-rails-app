angular.module('teaching-directive',['player-service'])
.directive('jcTeachings', function(){
  return {
    restrict: 'A',
    templateUrl: 'teaching-template.html',
    controller: 'TeachingController',
    link: function(scope, element, attr, PlayerService) {
      var b = PlayerService;

      // display teachings
      scope.$on('showBiblebook', function(event, biblebook) {
        // debugger;
        scope.biblebookname = biblebook.name;
        scope.teachings = biblebook.teachings;
        scope.bibelbookImage = biblebook.image;
      });


      scope.clickTeaching = function(trackLink) {

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

        //refactor this to use PlayerService.setTrack(trackLink) or something
        var mainAudio = document.getElementById("main-audio");
        mainAudio.setAttribute('src',trackLink);


        title.html("<h1>"+scope.biblebookname+"</h1><p>"+name+"</p>")
        download.attr({"href":mp3,"download":name});
        readAlong.attr("href", refurl);
        podcast.attr("href", podcasturl);
        playerWrapper.css("display","block");
        mainAudio.play();
      }
    }
  }
});
