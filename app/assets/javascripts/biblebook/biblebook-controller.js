angular.module('biblebook-controller',[])
.controller('BiblebookController', function($scope, BiblebookService){

  var BiblebookController = this;
  // $scope.biblebooks = BiblebookService.getBiblebooks();
  // debugger;



  BiblebookService.getAllBiblebooks().then(function(biblebooks){
    $scope.biblebooks = biblebooks;
  });


});
