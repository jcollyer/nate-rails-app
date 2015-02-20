angular.module('nate-service',[])
.service('NateService', function(){

    var pagePlace, windowWrapperReSize, windowWrapperSize;
    $("#main-nav li").click(function() {
      var el, scroll, temp;
      el = $(this).text();
      temp = "#" + el + "-link";
      scroll = $(temp).offset().top - 25;
      $('html, body').animate({
        scrollTop: scroll
      }, 800, 'swing');
    });
    $(".about-link").click(function(event) {
      var scroll;
      event.preventDefault();
      scroll = $("#about-link").offset().top - 90;
      return $("html, body").animate({
        scrollTop: scroll
      }, 400);
    });

    pagePlace = function() {
      var pagePosition;
      pagePosition = $("body").scrollTop() || pageYOffset;
      if (pagePosition < 50) {
        $("#main-nav").removeClass("new-nav").addClass("old-nav");
        $(".logo").removeClass("new-logo").addClass("old-logo");
        return $(".teaching-panels").css("margin-top", "80px");
      } else {
        $("#main-nav").removeClass("old-nav").addClass("new-nav");
        $(".logo").removeClass("old-logo").addClass("new-logo");
        return $(".teaching-panels").css("margin-top", "56px");
      }
    };
    if ($(window).width() > 767) {
      $(window).scroll(function() {
        return pagePlace();
      });
    }
    $(".logo").on("click", function() {
      return $("html, body").animate({
        scrollTop: 0
      }, 450);
    });
    windowWrapperReSize = function() {
      var negPanelsWidth, panelsPercentage, widthMinusPanels, windowWidth;
      windowWidth = $(window).width();
      negPanelsWidth = "-160px";
      panelsPercentage = 160 / windowWidth;
      widthMinusPanels = (1 - panelsPercentage) * 100 + "%";
      return $("#page-wrapper").css("width", widthMinusPanels);
    };
    windowWrapperSize = function() {
      var negPanelsWidth, panelsPercentage, widthMinusPanels, windowWidth;
      windowWidth = $(window).width();
      negPanelsWidth = "-160px";
      panelsPercentage = 160 / windowWidth;
      widthMinusPanels = (1 - panelsPercentage) * 100 + "%";
      return $("#page-wrapper, #nav-wrap").animate({
        width: widthMinusPanels
      }, 250);
    };
    $(window).resize(function() {
      if ($(".teaching-panels").hasClass("opened")) {
        return windowWrapperReSize();
      }
    });
    $(".biblebook-hover").on("click", function() {
      var $el, $this, close, negPanelsWidth, openPanelID, panel, panels,
          theID, thisID, thisLink, thisPanel, teachingChapter, closeButton;
      teachingChapter = $(".teaching-chapter");
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
        closeButton = $("#close-button");
        closeButton.css("right","160px");

        teachingChapter.html("");

        mediaPath = document.URL + '/biblebooks/'+theID+'.json';
        $.getJSON(mediaPath, function( data ) {
          var items = [];
          var teachings = data.teachings;
          var biblebookName = data.name;
          var biblebookImage = data.medium_image;
          $(".teaching-image").html("<img src="+biblebookImage+" />");
          $.each( teachings, function( key, val ) {
            var teachings = [];
            var id = val.id;
            var mp3 = val.mp3;
            var name = val.name;
            var refurl = val.refurl;
            var podcasturl = val.podcasturl;

            items.push(
              '<a class="teaching-item" >' +
                '<div class="play-this-teaching button-play-list" data-name="'+name+'" data-mp3="'+mp3+'" data-refurl="'+refurl+'" data-podcasturl="'+podcasturl+'" data-biblebook="'+biblebookName+'"></div>' +
                '<p>'+name+'</p>' +
              '</a>'
             );
          });


          // debugger;
          // $( "<ul/>", {
          //   "class": "my-new-list",
          //   html: items.join( "" )
          // }).appendTo( "body" );

          $( items.join( "" )).appendTo( ".teaching-chapter" );
          // debugger;
        });

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
    $(".teaching-panel-close").on("click", function() {
      var close, negPanelsWidth, closeButton;
      negPanelsWidth = "-160px";
      closeButton = $("#close-button");
      closeButton.css("right","0px");
      close = $(".teaching-panel-close");
      $("#page-wrapper, #nav-wrap").animate({
        width: "100%"
      }, 250);
      $(".teaching-panels").animate({
        left: negPanelsWidth
      }, 250, function() {
        // $(".teaching-panel").hide();
        return close.css("right", "0px");
      });
      return $(".teaching-panels").removeClass("opened");
    });
    $("#hamburger").on("click", function() {
      if ($(this).css("color") === "rgb(255, 255, 255)") {
        $(this).css("color", "#2e97d7");
        return $("#mobile-links").fadeIn();
      } else {
        $(this).css("color", "#ffffff");
        return $("#mobile-links").fadeOut();
      }
    });
    $(".mobile-link").click(function() {
      var el, scroll, temp;
      el = $(this).text();
      temp = "#" + el + "-link";
      scroll = $(temp).offset().top - 10;
      $("html, body").animate({
        scrollTop: scroll
      }, 400);
      $("#mobile-links").fadeOut();
      return $("#hamburger").css("color", "#ffffff");
    });
    if ($(".js-black-background").length) {
      $("body").css("background-color", "#111111");
    }





});
