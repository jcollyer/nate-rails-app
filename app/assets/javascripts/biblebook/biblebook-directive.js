angular.module('biblebook-directive',[])
.directive('jcBiblebook', function(BiblebookService){
  return {
    restritc: 'A',

    templateUrl: 'biblebook-template.html',
    controller: 'BiblebookController',
    scope: {},
    link: function(scope, element, attr) {
      var biblebooks = BiblebookService;
      scope.biblebooks = biblebooks.getBiblebooks;

      // debugger;
      // scope.biblebooks = BiblebookService.getBiblebook();
      // scope.biblebook = "sfsadfasdf";
    }
  };
})
