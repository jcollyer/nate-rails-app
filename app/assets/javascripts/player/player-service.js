angular.module('player-service',[])
.service('PlayerService', function($sce){
  var PlayerService = this,
      audioTrack,
      audioElement,
      muted,
      speed,
      callbacks = {};

  PlayerService.getTrack = function() {
    return $sce.trustAsResourceUrl(audioTrack) || null;
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

  PlayerService.audioReady = function() {
    runCallbacks("audioReadyCallback");
  };

  PlayerService.togglePlay = function() {
    if (audioElement.paused) {
      PlayerService.play();
    } else {
      PlayerService.pause();
    };
  };

  PlayerService.play = function() {
    audioElement.play();
    runCallbacks("playingCallback");
  };

  PlayerService.pause = function() {
    audioElement.pause();
    runCallbacks("pausedCallback");
  };

  PlayerService.setCurrentTime = function(newTime) {
    audioElement.currentTime = newTime;
  };

  PlayerService.getCurrentTime = function() {
    return audioElement.currentTime;
  };

  PlayerService.setSeconds = function(event, xoffset, target) {
    var target = target || event;
    if (event) {
      var xoffset = event.offsetX || event.layerX;
      var width = target.currentTarget ? target.currentTarget.clientWidth : target.clientWidth;
    }
    var duration = audioElement.duration;
    seconds = (xoffset / width) * duration;
  };

  PlayerService.getSeconds = function() {
    return seconds;
  }

  PlayerService.getDuration = function() {
    return audioElement.duration;
  };

  PlayerService.setIsScrubbing = function(scrub) {
    isScrubbing = scrub
  };

   PlayerService.getIsScrubbing = function() {
    // returns true or false
    return isScrubbing
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
    muted = true;
    audioElement.muted = true;
    runCallbacks("mutedCallback");
  };

  PlayerService.setUnMuted = function(){
    // volume is undefined if passed by ref
    muted = false;
    audioElement.muted = false;
    runCallbacks("mutedCallback");
  };

  PlayerService.setPlaybackRate = function(speed){
    trackSpeed = speed;
    audioElement.playbackRate = trackSpeed;

  };

  PlayerService.getPlaybackRate = function(){
    return trackSpeed
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
