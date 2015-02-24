angular.module('biblebook-service', [])
  .service('BiblebookService', function($http, $q) {
    var BiblebookService = this;


    BiblebookService.getBiblebook = function(id){
        // There will always be a promise so always declare it.
        var deferred = $q.defer();
        // if (Cache[id]) {
        //     // Resolve the deferred $q object before returning the promise
        //     deferred.resolve(Cache[id]);
        //     return deferred.promise;
        // }
        // else- not in cache
        $http.get('/biblebooks/'+id+'.json', {id:id}).success(function(data){
            // Store your data or what ever....
            // Then resolve
            id = id;
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject("Error: request returned status " + status);
        });
        return deferred.promise;
    }

  BiblebookService.getAllBiblebooks = function() {
    var deferred = $q.defer();
    $http.get('/biblebooks.json').success(function(data){
      name = data.name;
      debugger;
      deferred.resolve(data);
    }).error(function(data, status, headers, config) {
      deferred.reject("Error: request returned status " + status);
    });
    return deferred.promise;
  }
});
