angular.module('biblebook-controller',[])
.controller('BiblebookController', function($scope, BiblebookService){

  var BiblebookController = this;
  // $scope.biblebooks = BiblebookService.getBiblebooks();
  // debugger;

  BiblebookService.getBiblebook(13).then(function(biblebook) {
      // debugger;
      // biblebook.name =
    // alert(thing);
    // $scope.biblebook = thing;
  });

  BiblebookService.getAllBiblebooks().then(function(biblebooks){
    // debugger;
    $scope.biblebooks = biblebooks;
  });
});
