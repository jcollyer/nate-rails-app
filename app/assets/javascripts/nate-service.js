angular.module('nate-service',[])
.service('NateService', function(PlayerService){

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
        // return $(".teaching-panels").css("margin-top", "80px");
      } else {
        $("#main-nav").removeClass("old-nav").addClass("new-nav");
        $(".logo").removeClass("old-logo").addClass("new-logo");
        // return $(".teaching-panels").css("margin-top", "56px");
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
    };

    $('.button-play-list-mobile').click(function(){
        $('.button-play-list-mobile').removeClass('active');
        $(this).addClass('active');
        // var teachingName = $(this).attr('data-name');
        // var download = angular.element( document.querySelector( '.button-download' ) );
        var player = document.getElementById('main-audio');
        var readAlong = $('.button-read-along');
        var podcast = $('.button-podcast');
        var loader = $('#loader');

        // var teaching = this.teaching;
        var mp3 = $(this).attr('data-mp3');
        var name = $(this).attr('data-name');
        var refurl = $(this).attr('data-refurl');
        var podcasturl = $(this).attr('data-podcast');

        loader.css("display","block");


        player.setAttribute("src",mp3);

        player.play();

        var playPause = $('#play-pause');
        playPause.addClass("button-pause").removeClass("button-play");


        // teachingName.html(name);
        // download.attr({"href":mp3,"download":name});
        readAlong.attr("href", refurl);
        podcast.attr("href", podcasturl);
      });

      // scope.selected = function(mp3) {
      //   if (PlayerService && PlayerService.getTrack()){
      //     return mp3 === PlayerService.getTrack().toString();
      //   }
      // };



});
