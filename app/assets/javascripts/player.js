(function() {
  $(function() {
    $(document).on("click", ".biblebook-hover", function() {
      var $el, $this, close, negPanelsWidth, openPanelID, panel, panels,
          theID, thisID, thisLink, thisPanel, teachingChapter, closeButton;
      teachingChapter = $("#teaching-chapter");
      if ($(window).width() < 767) {
        thisID = $(this).data("id");
        thisLink = "/biblebooks/" + thisID;
        return window.location = thisLink;
      } else {
        $this = $(this);
        $el = $this.siblings("img");
        panels = $(".teaching-panels");
        panel = $(".teaching-panel");
        openPanelID = $(".teaching-panel:visible").data("id") || null;
        theID = $el.data("biblebook");

        // teachingChapter.html("");

        // mediaPath = document.URL + '/biblebooks/'+theID+'.json';
        // $.getJSON(mediaPath, function( data ) {
        //   var items = [];
        //   var teachings = data.teachings;
        //   var biblebookName = data.name;
        //   var biblebookImage = data.medium_image;
        //   $(".teaching-image").html("<img src="+biblebookImage+" />");
        //   $.each( teachings, function( key, val ) {
        //     var teachings = [];
        //     var id = val.id;
        //     var mp3 = val.mp3;
        //     var name = val.name;
        //     var refurl = val.refurl;
        //     var podcasturl = val.podcasturl;

        //     items.push(
        //       '<a class="teaching-item" >' +
        //         '<div class="play-this-teaching button-play-list" data-name="'+name+'" data-mp3="'+mp3+'" data-refurl="'+refurl+'" data-podcasturl="'+podcasturl+'" data-biblebook="'+biblebookName+'"></div>' +
        //         '<p>'+name+'</p>' +
        //       '</a>'
        //      );
        //   });


        //   // debugger;
        //   // $( "<ul/>", {
        //   //   "class": "my-new-list",
        //   //   html: items.join( "" )
        //   // }).appendTo( "body" );

        //   $( items.join( "" )).appendTo( "#teaching-chapter" );
        //   // debugger;
        // });

        close = $(".teaching-panel-close");
        $(".teaching-panels").addClass("opened");
        negPanelsWidth = "-160px";
        if (theID !== openPanelID) {
          if (panels.css("left") === negPanelsWidth) {
            panels.animate({
              left: "0px"
            }, 250);
            close.css("right", "-46px");
            return windowWrapperSize();
          }
        }
      }
    });





    html5player = document.getElementById("main-audio");
      // $(document).on("click", ".teaching-item", function() {
      //   var $button, $this, bibleBook, mediaPath, podcasturlPath, refurlPath, titlePath, closeButton;
      //   $(".teaching-item").removeClass("active-item");
      //   $this = $(this);
      //   $button = $this.find(".play-this-teaching");
      //   closeButton = $("#close-button");
      //   mediaPath = $button.data("mp3");
      //   bibleBook = $button.data("biblebook");
      //   titlePath = $button.data("name");
      //   refurlPath = $button.data("refurl");
      //   podcasturlPath = $button.data("podcasturl");
      //   // console.log("$button: " + $button, "mediaPath: " + mediaPath, "bibleBook: " + bibleBook, "titlePath: " + titlePath, "refurlPath: " + refurlPath, "podcasturlPath: " + podcasturlPath);
      //   closeButton.css("right","160px");
      //   $("#loader").fadeIn();
      //   $("#player").fadeIn();
      //   $this.addClass("active-item");
      //   $this.addClass("clicked-item");

      //   $("#lesson-mod-info").empty().prepend("<h1>" + bibleBook + "</h1><p>" + titlePath + "</p>");
      //   $("#button-download").attr({
      //     "href": mediaPath,
      //     "download": titlePath
      //   });
      //   $("#button-read-along").attr("href", refurlPath);
      //   $("#button-podcast").attr("href", podcasturlPath);

      //   html5player.setAttribute("src", mediaPath);

      //   initiate = function() {
      //     html5player.play();
      //     // $("#play-pause").removeClass("button-play").addClass("button-pause");
      //   };


      //   html5player.addEventListener('onload', initiate());
      // });

      $(document).on("click", "#close-button", function() {
        $("#player").css("display", "none");
        pausePlayer();
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

      // var togglePlayer = function() {
      //   var playPause = $("#play-pause");
      //   if (playPause.hasClass("button-play") ) {
      //     html5player.play();
      //     $("#play-pause").removeClass("button-play").addClass("button-pause");
      //   } else {
      //     html5player.pause();
      //     $("#play-pause").removeClass("button-pause").addClass("button-play");
      //   }
      // };

      var seekbar = document.getElementById("seek_bar");
      var progress = document.getElementById("progress_bar");
      var progressbar = $("#progress_bar");
      // var volumebar = $(".volume-bar");

      // $(document).on("click", "#play-pause", function() {
      //   togglePlayer();
      // });

      html5player.addEventListener('loadedmetadata', function(){
        progress.setAttribute('max', Math.floor(html5player.duration));
        $("#loader").fadeOut();
        html5player.duration.textContent  = toHHMMSS(html5player.duration);
      });

      // html5player.addEventListener('timeupdate', function(){
      //   // convert total seconds to hh:mm:ss
      //   var timeStyle = function(totalSec){
      //     var minutes = parseInt( totalSec / 60 ) % 60;
      //     var seconds = Math.floor(totalSec % 60);
      //     return minutes + ":" + (seconds  < 10 ? "0" + seconds : seconds);
      //   }
      //   var timeDuration = timeStyle( html5player.duration );
      //   var duration = Math.floor(html5player.duration);
      //   // these are used to show the time
      //   timeNow = timeStyle( Math.floor( html5player.currentTime ));
      //   // this is used to show the progress bar
      //   // var progressWidth = 100 * Math.floor( html5player.currentTime / duration );


      //   var progressWidth = 100 * (html5player.currentTime / duration);
      //   progressbar.css('width', progressWidth + "%");
      //   // html5player.currentTime.textContent  = toHHMMSS(html5player.currentTime);
      // });

      $(document).on("click", "#seek_bar", function(e) {
        var duration = Math.floor(html5player.duration);
        var xoffset = e.offsetX || e.layerX;
        var seconds = (xoffset / e.currentTarget.clientWidth) * duration;

        // youtube.getProgress();
        html5player.currentTime = seconds;
        // youtube.player.playVideo();
      });

      $(document).on("click", "#volume-toggle", function() {
        // debugger;
        volumeToggle = $("#volume-toggle");
        if (volumeToggle.hasClass("volume-up")) {
          html5player.volume = 1;
          volumeToggle.removeClass("volume-up").addClass("volume-mute");
        } else {
          html5player.volume = 0;
          volumeToggle.removeClass("volume-mute").addClass("volume-up");
        }
      });


      $(document).on("click", ".speed", function() {
        $(".speed").removeClass("active-speed")
        $(this).addClass("active-speed")
      });
      $(document).on("click", ".speed-20" , function() {
        html5player.pause();
        html5player.playbackRate = 2
        html5player.play();
      });
      $(document).on("click", ".speed-17" , function() {
        html5player.pause();
        html5player.playbackRate = 1.7
        html5player.play();
      });
      $(document).on("click", ".speed-15" , function() {
        html5player.pause();
        html5player.playbackRate = 1.5
        html5player.play();
      });
      $(document).on("click", ".speed-13" , function() {
        html5player.pause();
        html5player.playbackRate = 1.3
        html5player.play();
      });
      $(document).on("click", ".speed-10" , function() {
        html5player.pause();
        html5player.playbackRate = 1.0
        html5player.play();
      });

      $(document).on("click", "#button-goback", function() {
        currentTime = html5player.currentTime
        currentTimeRewind = currentTime - 30
        html5player.currentTime = currentTimeRewind
      });


  });
}).call(this);

