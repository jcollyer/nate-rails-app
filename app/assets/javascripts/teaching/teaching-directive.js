angular.module('teaching-directive',[])
.directive('jcTeachings', function(){
  return {
    restrict: 'A',
    templateUrl: 'teaching-template.html',
    controller: 'TeachingController',
    scope: {},
    link: function(scope, element, attr) {

      scope.$on('showBiblebook', function(event, biblebook) {
        scope.teachings = biblebook.teachings;
        scope.bibelbookImage = biblebook.image;


      });
    }
  }
});
