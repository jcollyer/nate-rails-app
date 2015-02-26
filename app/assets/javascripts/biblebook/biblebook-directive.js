angular.module('biblebook-directive',[])
.directive('jcBiblebook', function(BiblebookService){
  return {
    restritc: 'A',

    templateUrl: 'biblebook-template.html',
    controller: 'BiblebookController',
    scope: {},
    link: function(scope, element, attr) {
      var biblebookService = BiblebookService;

      scope.biblebooks = biblebookService.getAllBiblebooks();

       var $this, close, negPanelsWidth, openPanelID, panel, panels,
          theID, thisID, thisLink, thisPanel, closeButton;

      thisElement = element;

      var teachingChapter = document.getElementById("teaching-chapter");

      scope.playTrack = function(id) {
        if (window.innerWidth < 767) {
        } else {
          var biblebookId = id;

          // debugger;
          // biblebookService.setBiblebook(biblebookId);


          BiblebookService.getBiblebook(biblebookId).then(function(data) {
            debugger;
            $scope.data = data;
          });
        };
      };


    }
  };
});
