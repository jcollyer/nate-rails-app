(function() {
  $(function() {
    $(document).on("click", ".player_close_button", function() {
      $("#lesson_mod_menu").css("display", "none");
      return player.jPlayer("pause");
    });


    html5player = document.getElementById("main-audio");

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

      html5player.setAttribute("src", mediaPath);

      initiate = function() {
        html5player.play();
        var playButton = $(".jp-play");
        var pauseButton = $(".jp-pause");
        playButton.css("display","none");
        pauseButton.css("display","block");
      };


      html5player.addEventListener('onload', initiate());

    });

    var toHHMMSS = function ( totalsecs ) {
        var sec_num = parseInt(totalsecs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours; }
        if (minutes < 10) {minutes = ""+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        var time = hours+':'+minutes+':'+seconds;
        if (hours   <= 1) { var time = minutes+':'+seconds; }

        return time;
    }

    var seekbar = document.getElementById("seek_bar");
    var progress = document.getElementById("progress_bar");
    var progressbar = $("#progress_bar");
    var volumebar = $(".volume-bar");

    $(document).on("click", ".button-pause", function() {
      html5player.pause();
      var playButton = $(".jp-play");
      var pauseButton = $(".jp-pause");
      playButton.css("display","block");
      pauseButton.css("display","none");
    });

    $(document).on("click", ".button-play", function() {
      html5player.play();
      var playButton = $(".jp-play");
      var pauseButton = $(".jp-pause");
      playButton.css("display","none");
      pauseButton.css("display","block");
    });

    html5player.addEventListener('loadedmetadata', function(){
      progress.setAttribute('max', Math.floor(html5player.duration));
      $("#loader").fadeOut();
      html5player.duration.textContent  = toHHMMSS(html5player.duration);
    });

    html5player.addEventListener('timeupdate', function(){
      progressbar.css('width', html5player.currentTime + "%");
      // html5player.currentTime.textContent  = toHHMMSS(html5player.currentTime);
    });

    $(document).on("click", "#seek_bar", function(e) {
      // html5player.currentTime = Math.floor(html5player.duration) * (e.offsetX / e.target.offsetWidth);
      var duration = Math.floor(html5player.duration);
      var xoffset = e.offsetX || e.layerX;
      var seconds  = ((xoffset / (e.target.offsetWidth * 2)) * duration) / 10;
      html5player.currentTime = seconds;
      progressbar.css('width', html5player.currentTime + "%");
    });

    $(document).on("click", ".jp-mute", function() {
      html5player.volume = 0;
      volumebar.css("width","0%");
    });

    $(document).on("click", ".jp-volume-max", function() {
      html5player.volume = 1;
      volumebar.css("width","100%");
    });

    // $(document).on("click", ".volume-bar", function() {
    //   html5player.volume = 1;
    //   volumebar.css("width","100%");
    // });

    $(document).on("click", ".speed", function() {
      $(".speed").removeClass("activeSpeed")
      $(this).addClass("activeSpeed")
    });
    $(document).on("click", ".speed-20" , function() {
      html5player.playbackRate = 2
    });
    $(document).on("click", ".speed-17" , function() {
      html5player.playbackRate = 1.7
    });
    $(document).on("click", ".speed-15" , function() {
      html5player.playbackRate = 1.5
    });
    $(document).on("click", ".speed-13" , function() {
      html5player.playbackRate = 1.3
    });
    $(document).on("click", ".speed-10" , function() {
      html5player.playbackRate = 1.0
    });

    $(document).on("click", ".player_rewind", function() {
      currentTime = html5player.currentTime
      currentTimeRewind = currentTime - 30
      html5player.currentTime = currentTimeRewind
    });

  });



}).call(this);

