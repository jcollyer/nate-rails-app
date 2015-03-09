angular.module('biblebook-directive',[])
.directive('jcBiblebook', function(BiblebookService, $rootScope){
  return {
    restritc: 'A',

    templateUrl: 'biblebook-template.html',
    controller: 'BiblebookController',
    scope: {},
    link: function(scope, element, attr) {
      var biblebookService = BiblebookService;
      scope.opened = false;
      scope.mobile = false;

      scope.biblebooks = biblebookService.getAllBiblebooks();

      thisElement = element;

      scope.playTrack = function(id) {
        var pageWrapper = angular.element( document.querySelector( '#page-wrapper' ) );
        var teachingPannels = angular.element( document.querySelector( '.teaching-panels' ) );
        var closeButton = angular.element( document.querySelector( '.teaching-panel-close' ) );

        if (window.innerWidth < 767) {
          scope.mobile = true;

        } else {
          scope.mobile = false;
          var biblebookId = id;

          BiblebookService.getBiblebook(biblebookId).then(function(biblebook) {
            scope.biblebook = biblebook;
            $rootScope.$broadcast('showBiblebook', biblebook);
          });
          if (teachingPannels.hasClass("opened")) {
            return;
          } else {
            teachingPannels.addClass("opened").css("width","160px");
            closeButton.css("display","block");
            pageWrapper.css("width","calc(100% - 160px)");
          };
        };
      };


    }
  };
});
