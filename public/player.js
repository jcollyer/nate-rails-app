(function() {
  $(function() {
    $(document).on("click", ".player_close_button", function() {
      $("#lesson_mod_menu").css("display", "none");
      return player.jPlayer("pause");
    });
    $(document).on("click", ".teaching-item", function() {
      var $button, $this, bibleBook, mediaPath, podcasturlPath, refurlPath, titlePath;
      $(".teaching-item").removeClass("active-item");
      $this = $(this);
      $button = $this.find(".play-this-teaching");
      mediaPath = $button.data("mp3");
      bibleBook = $button.data("biblebook");
      titlePath = $button.data("name");
      refurlPath = $button.data("refurl");
      podcasturlPath = $button.data("podcasturl");
      console.log("$button: " + $button, "mediaPath: " + mediaPath, "bibleBook: " + bibleBook, "titlePath: " + titlePath, "refurlPath: " + refurlPath, "podcasturlPath: " + podcasturlPath);
      $("#loader").fadeIn();
      $("#lesson_mod_menu").fadeIn();
      $("#lesson_mod_menu_mobile").fadeIn();
      $this.addClass("active-item");
      $(".lesson_mod_info").empty().prepend("<h1 class='teaching_title'> " + bibleBook + " </h1> <h1 class='teaching_title'><span class='chapter_text'>Chapter </span>" + titlePath + " </h1> ");
      $("#player_download_url").attr({
        "href": mediaPath,
        "download": titlePath
      });
      $(".player_refurl").attr("href", refurlPath);
      $(".player_podcasturl").attr("href", podcasturlPath);
      window.player = $("#jquery_jplayer_1").jPlayer({
        swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
        supplied: "mp3",
        solution: "html, flash",
        volume: 0.8,
        wmode: "window",
        smoothPlayBar: false,
        errorAlerts: false,
        warningAlerts: false,
        ready: function() {
          player.on($.jPlayer.event.canplay, function() {
            return $("#loader").fadeOut();
          });
          player.on($.jPlayer.event.play, function() {
            return $button.removeClass("paused");
          });
          return player.on($.jPlayer.event.pause, function() {
            return $button.addClass("paused");
          });
        }
      });
      if ($button.data("state") === "playing") {
        player.jPlayer("pause");
        return $button.data("state", "paused");
      } else {
        player.jPlayer("setMedia", {
          mp3: mediaPath,
          oga: mediaPath
        });
        player.jPlayer("play");
        player.jPlayer("pauseOthers");
        $button.data("state", "playing");
        return $button.removeClass("paused");
      }
    });
    $(document).on("click", ".speed", function() {
      $(".speed").removeClass("activeSpeed");
      return $(this).addClass("activeSpeed");
    });
    $(document).on("click", ".speed-20", function() {
      var audioDiv, trackSpeed;
      audioDiv = document.getElementById("jp_audio_0");
      return trackSpeed = audioDiv.playbackRate = 2;
    });
    $(document).on("click", ".speed-17", function() {
      var audioDiv, trackSpeed;
      audioDiv = document.getElementById("jp_audio_0");
      return trackSpeed = audioDiv.playbackRate = 1.7;
    });
    $(document).on("click", ".speed-15", function() {
      var audioDiv, trackSpeed;
      audioDiv = document.getElementById("jp_audio_0");
      return trackSpeed = audioDiv.playbackRate = 1.5;
    });
    $(document).on("click", ".speed-13", function() {
      var audioDiv, trackSpeed;
      audioDiv = document.getElementById("jp_audio_0");
      return trackSpeed = audioDiv.playbackRate = 1.3;
    });
    $(document).on("click", ".speed-10", function() {
      var audioDiv, trackSpeed;
      audioDiv = document.getElementById("jp_audio_0");
      return trackSpeed = audioDiv.playbackRate = 1.0;
    });
    return $(document).on("click", ".player_rewind", function() {
      var audioDiv, currentTime, currentTimeRewind;
      audioDiv = document.getElementById("jp_audio_0");
      currentTime = audioDiv.currentTime;
      currentTimeRewind = currentTime - 30;
      return audioDiv.currentTime = currentTimeRewind;
    });
  });

}).call(this);

