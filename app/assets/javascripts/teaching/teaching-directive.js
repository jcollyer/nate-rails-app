angular.module('teaching-directive',['player-service'])
.directive('jcTeachings', function(){
  return {
    restrict: 'A',
    templateUrl: 'teaching-template.html',
    controller: 'TeachingController',
    link: function(scope, element, attr) {
      var teachingPanels = angular.element( document.querySelector( '.teaching-panels' ) );
      var closeButton = angular.element( document.querySelector( '.teaching-panel-close' ) );
      var pageWrapper = angular.element( document.querySelector( '#page-wrapper' ) );

      // display teachings
      scope.$on('showBiblebook', function(event, biblebook) {
        scope.biblebookname = biblebook.name;
        scope.teachings = biblebook.teachings;
        scope.bibelbookImage = biblebook.medium_image;
      });

      scope.closePlaylist = function() {
        closeButton.css("display","none");
        teachingPanels.removeClass("opened").css("width","0px");
        pageWrapper.css("width","100%");
      };



    }
  }
});
