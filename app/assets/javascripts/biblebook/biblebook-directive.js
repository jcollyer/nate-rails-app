angular.module('biblebook-directive',[])
.directive('jcBiblebook', function(BiblebookService, $rootScope){
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

      scope.playTrack = function(id) {
        if (window.innerWidth < 767) {
        } else {
          var biblebookId = id;

          BiblebookService.getBiblebook(biblebookId).then(function(biblebook) {
            scope.biblebook = biblebook;
            $rootScope.$broadcast('showBiblebook', biblebook);
          });

        };
      };


    }
  };
});
