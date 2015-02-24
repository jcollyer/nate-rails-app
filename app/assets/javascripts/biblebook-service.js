angular.module('biblebook-service', [])
.service('BiblebookService', function($http){
  var BiblebookService = this;
  BiblebookService
  .getBiblebook = function(id) {
    var request = $http({
      method: get,
      url: 'http://localhost:3000/biblebooks/'+id+'.json',
      params: {
        action: 'get'
      },
      data: {
        id: id
      }
    });
    return request;
  };
});
