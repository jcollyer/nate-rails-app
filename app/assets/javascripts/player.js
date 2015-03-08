(function() {
  $(function() {
    $(document).on("click", ".biblebook-hover", function() {

      teachingChapter = $("#teaching-chapter");
      if ($(window).width() < 767) {
        thisID = $(this).data("id");
        thisLink = "/biblebooks/" + thisID;
        return window.location = thisLink;
      } else {
        // $this = $(this);
        // $el = $this.siblings("img");
        // panels = $(".teaching-panels");
        // panel = $(".teaching-panel");
        // openPanelID = $(".teaching-panel:visible").data("id") || null;
        // theID = $el.data("biblebook");



        // close = $(".teaching-panel-close");
        // $(".teaching-panels").addClass("opened");
        // negPanelsWidth = "-160px";
        // if (theID !== openPanelID) {
        //   if (panels.css("left") === negPanelsWidth) {
        //     panels.animate({
        //       left: "0px"
        //     }, 250);
        //     close.css("right", "-46px");
        //     return windowWrapperSize();
        //   }
        // }
      }
    });


    // html5player = document.getElementById("main-audio");

      // $(document).on("click", "#close-button", function() {
      //   $("#player").css("display", "none");
      //   pausePlayer();
      // });

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


      // var seekbar = document.getElementById("seek_bar");
      // var progress = document.getElementById("progress_bar");
      // var progressbar = $("#progress_bar");


      // html5player.addEventListener('loadedmetadata', function(){
      //   progress.setAttribute('max', Math.floor(html5player.duration));
      //   $("#loader").fadeOut();
      //   html5player.duration.textContent  = toHHMMSS(html5player.duration);
      // });

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

      // $(document).on("click", "#seek_bar", function(e) {
      //   var duration = Math.floor(html5player.duration);
      //   var xoffset = e.offsetX || e.layerX;
      //   var seconds = (xoffset / e.currentTarget.clientWidth) * duration;

      //   // youtube.getProgress();
      //   html5player.currentTime = seconds;
      //   // youtube.player.playVideo();
      // });


  });
}).call(this);

