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
      // $("#loader").fadeIn();
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

      playing = function() {
        html5player.play();
        var playButton = $(".jp-play");
        var pauseButton = $(".jp-pause");
        playButton.css("display","none");
        pauseButton.css("display","block");
      };


      html5player.addEventListener('onload', playing());

    });
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




  });



}).call(this);

