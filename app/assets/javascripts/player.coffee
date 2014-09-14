$ ->
  $(document).on "click", ".player_close_button", ->
    $("#lesson_mod_menu").css "display", "none"
    player.jPlayer "pause"

  $(document).on "click", ".teaching-item", ->
    $(".teaching-item").removeClass("active-item")

    $this              = $(this)
    $button            = $this.find(".play-this-teaching")
    mediaPath          = $button.data("mp3")
    bibleBook          = $button.data("biblebook")
    titlePath          = $button.data("name")
    refurlPath         = $button.data("refurl")
    podcasturlPath     = $button.data("podcasturl")
    # imagePath          = $(".book_image").attr("src")

    console.log("$button: " + $button, "mediaPath: " + mediaPath, "bibleBook: " + bibleBook, "titlePath: " + titlePath, "refurlPath: " + refurlPath, "podcasturlPath: " + podcasturlPath);
    # open player
    $("#loader").fadeIn()
    $("#lesson_mod_menu").fadeIn()
    $("#lesson_mod_menu_mobile").fadeIn()
    # add active to teaching in playlist
    $this.addClass("active-item")
    # add/update teaching details
    $(".lesson_mod_info").empty().prepend("<h1 class='teaching_title'> "+bibleBook+" </h1> <h1 class='teaching_title'><span class='chapter_text'>Chapter </span>"+ titlePath+" </h1> ")
    # $(".mod_img").attr("src", imagePath)
    $("#player_download_url").attr("href":mediaPath,"download":titlePath)
    $(".player_refurl").attr("href", refurlPath)
    $(".player_podcasturl").attr("href", podcasturlPath)
    # jplayer
    window.player = $("#jquery_jplayer_1").jPlayer
      swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf"
      supplied: "mp3"
      solution: "html, flash"
      volume: 0.8
      wmode: "window"
      smoothPlayBar: false
      errorAlerts: false
      warningAlerts: false
      ready: ->
        player.on $.jPlayer.event.canplay, ->
          # console.log "ready"
          $("#loader").fadeOut()
        player.on $.jPlayer.event.play, ->
          $button.removeClass "paused"
        player.on $.jPlayer.event.pause, ->
          $button.addClass "paused"

    if $button.data("state") == "playing"
    # console.log "clicked pause"
      player.jPlayer "pause"
      $button.data "state", "paused"
    else
    # console.log "clicked play"
      player.jPlayer "setMedia", {
        mp3: mediaPath
        oga: mediaPath
      }
      # console.log mediaPath
      player.jPlayer "play"
      player.jPlayer "pauseOthers"
      $button.data "state", "playing"
      $button.removeClass "paused"

    # myPlaylist = new jPlayerPlaylist
    #   jPlayer: "#jp_audio_0"
    #   cssSelectorAncestor: "#jp_container_1"

  $(document).on "click", ".speed", ->
    $(".speed").removeClass("activeSpeed")
    $(this).addClass("activeSpeed")

  $(document).on "click", ".speed-20", ->
    audioDiv = document.getElementById("jp_audio_0")
    trackSpeed = audioDiv.playbackRate = 2
  $(document).on "click", ".speed-17", ->
    audioDiv = document.getElementById("jp_audio_0")
    trackSpeed = audioDiv.playbackRate = 1.7
  $(document).on "click", ".speed-15", ->
    audioDiv = document.getElementById("jp_audio_0")
    trackSpeed = audioDiv.playbackRate = 1.5
  $(document).on "click", ".speed-13", ->
    audioDiv = document.getElementById("jp_audio_0")
    trackSpeed = audioDiv.playbackRate = 1.3
  $(document).on "click", ".speed-10", ->
    audioDiv = document.getElementById("jp_audio_0")
    trackSpeed = audioDiv.playbackRate = 1.0

  $(document).on "click", ".player_rewind", ->
    audioDiv = document.getElementById("jp_audio_0")
    currentTime = audioDiv.currentTime
    currentTimeRewind = currentTime - 30
    audioDiv.currentTime = currentTimeRewind

  # $("#jquery_jplayer_1").on $.jPlayer.event.play, ->
  #   $(this).jPlayer("pauseOthers")
  #   console.log "hi"



  # Keyboard Control Overides
  # $(document.documentElement).keydown (event) ->
  #   if event.which is 32
  #     event.preventDefault()
  #     if $("#jquery_jplayer_1").data("jPlayer").status.paused
  #       $("#jquery_jplayer_1").jPlayer "play"
  #     else
  #       $("#jquery_jplayer_1").jPlayer "pause"


