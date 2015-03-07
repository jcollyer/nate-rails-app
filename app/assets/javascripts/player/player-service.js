angular.module('player-service',[])
.service('PlayerService', function(){
  var PlayerService = this,
      audioTrack,
      audioElement,
      muted,
      callbacks = {};

  PlayerService.getTrack = function() {
    return audioTrack;
  };

  PlayerService.setTrack = function(track) {
    audioTrack = track;
  };

  PlayerService.getElement = function() {
    return audioElement;
  };

  PlayerService.setElement = function(element) {
    audioElement = element;
  };

  PlayerService.togglePlay = function() {
    if (audioElement.paused) {
      PlayerService.play();
    } else {
      PlayerService.pause();
    };
  };

  PlayerService.play = function() {
    runCallbacks("playingCallback");
    audioElement.play();
  };

  PlayerService.pause = function() {
    runCallbacks("pausedCallback");
    audioElement.pause();
  };

  PlayerService.setCurrentTime = function(newTime) {
    audioElement.currentTime = newTime;
  };

  PlayerService.getCurrentTime = function() {
    return audioElement.currentTime;
  };

  PlayerService.toggleMute = function() {
    if (audioElement.muted){
      PlayerService.setUnMuted();
    } else{
      PlayerService.setMuted();
    };
  };

  PlayerService.getMuteSetting = function() {
    return muted;
  };

  PlayerService.setMuted = function(){
    // volume is undefined if passed by ref
    muted = true;
    audioElement.muted = true;
    runCallbacks("mutedCallback");
    // PlayerService.onPlayerStateChange({data: 6});
  };

  PlayerService.setUnMuted = function(){
    // volume is undefined if passed by ref
    muted = false;
    audioElement.muted = false;
    runCallbacks("mutedCallback");
    // PlayerService.onPlayerStateChange({data: 6});
  };

  //used to fill in the progress bar
  PlayerService.getProgress = function() {
    return 100 * (audioElement.currentTime / audioElement.duration);
  };


  //callbacks
  PlayerService.getCallbacks = function() {
    return callbacks;
  };
  // set a single event callback
  var setEventCallback = function(namespace, callbackKey, callback) {
    callbacks[namespace] = callbacks[namespace] || {};
    callbacks[namespace][callbackKey] = callback;
  };
  // set multiple event callbacks
  var setEventCallbacks = function(namespace, callbackObject) {
    Object.keys(callbackObject).forEach(function(key) {
      setEventCallback(namespace, key, callbackObject[key])
    });
  };
  var runCallbacks = function(type){
    // debugger;
    Object.keys(callbacks).forEach(function(key) {
      if (callbacks[key] && callbacks[key][type]) callbacks[key][type]();
    });
  };
  PlayerService.runCallbacks = runCallbacks;
  PlayerService.setEventCallback = setEventCallback;
  PlayerService.setEventCallbacks = setEventCallbacks;

  return PlayerService;

});
