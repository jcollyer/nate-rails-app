angular.module('biblebook-controller',[])
.controller('BiblebookController', function($scope, BiblebookService){

  var BiblebookController = this;

  BiblebookService.getAllBiblebooks().then(function(biblebooks){
    $scope.biblebooks = biblebooks;
  });
});
