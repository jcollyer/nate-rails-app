angular.module('biblebook-controller',[])
.controller('BiblebookController', [ '$scope', 'BiblebookService', function($scope, BiblebookService){

  var BiblebookController = this;

  BiblebookService.getAllBiblebooks().then(function(biblebooks){
    $scope.biblebooks = biblebooks;
  });
}]);
