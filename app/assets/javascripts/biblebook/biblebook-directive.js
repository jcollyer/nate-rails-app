angular.module('biblebook-directive',[])
.directive('jcBiblebook', ['BiblebookService', '$rootScope', function(BiblebookService, $rootScope){
  return {
    restritc: 'A',

    templateUrl: 'biblebook-template.html',
    controller: 'BiblebookController',
    scope: {},
    link: function(scope, element, attr) {
      var biblebookService = BiblebookService;
      scope.opened = false;

      scope.biblebooks = biblebookService.getAllBiblebooks();

      thisElement = element;

      scope.playTrack = function(id) {

        if (window.innerWidth < 767) {
          thisID = id;
          thisLink = "/biblebooks/" + thisID;
          return window.location = thisLink;
        } else {

          var pageWrapper = angular.element( document.querySelector( '#page-wrapper' ) );
          var teachingPannels = angular.element( document.querySelector( '.teaching-panels' ) );
          var closeButton = angular.element( document.querySelector( '.teaching-panel-close' ) );
          var mainNav = angular.element( document.querySelector( '#main-nav' ) );

          var biblebookId = id;

          BiblebookService.getBiblebook(biblebookId).then(function(biblebook) {
            scope.biblebook = biblebook;
            scope.biblebookName = biblebook.name;
            var title = angular.element( document.querySelector( '.lesson-mod-info h1' ) );
            title.html(scope.biblebookName);
            $rootScope.$broadcast('showBiblebook', biblebook);
          });

          if (!teachingPannels.hasClass("opened")) {
            teachingPannels.addClass("opened");
            closeButton.css("display","block");
            pageWrapper.addClass("opened");
            mainNav.css("width","calc(100% - 160px)");
          };

        };
      }

    }
  }
}]);
