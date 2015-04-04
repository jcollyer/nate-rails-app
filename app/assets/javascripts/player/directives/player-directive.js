angular.module('player-directive',[])
.directive('jcPlayer', ['PlayerService', function(PlayerService){
  return {
    restritc: 'A',
    replace: true,
    templateUrl: 'player-template.html',
    controller: 'PlayerController',
    scope: {
      mp3: '='
    },
    link: function(scope, element, attr) {
      var audioElement = element[0];

      PlayerService.setElement(audioElement);

      // update Audio Track
      scope.getAudioSrc = function() {
        return PlayerService.getTrack();
      };

      audioElement.oncanplay = function () {
        PlayerService.audioReady();
      };


    }
  };
}])
