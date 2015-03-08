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
    // windowWrapperReSize = function() {
    //   var negPanelsWidth, panelsPercentage, widthMinusPanels, windowWidth;
    //   windowWidth = $(window).width();
    //   negPanelsWidth = "-160px";
    //   panelsPercentage = 160 / windowWidth;
    //   widthMinusPanels = (1 - panelsPercentage) * 100 + "%";
    //   return $("#page-wrapper").css("width", widthMinusPanels);
    // };
    // windowWrapperSize = function() {
    //   var negPanelsWidth, panelsPercentage, widthMinusPanels, windowWidth;
    //   windowWidth = $(window).width();
    //   negPanelsWidth = "-160px";
    //   panelsPercentage = 160 / windowWidth;
    //   widthMinusPanels = (1 - panelsPercentage) * 100 + "%";
    //   return $("#page-wrapper, #nav-wrap").animate({
    //     width: widthMinusPanels
    //   }, 250);
    // };
    // $(window).resize(function() {
    //   if ($(".teaching-panels").hasClass("opened")) {
    //     return windowWrapperReSize();
    //   }
    // });


    // $(".teaching-panel-close").on("click", function() {
    //   var close, negPanelsWidth, closeButton;
    //   negPanelsWidth = "-160px";
    //   closeButton = $("#close-button");
    //   closeButton.css("right","0px");
    //   close = $(".teaching-panel-close");
    //   $("#page-wrapper, #nav-wrap").animate({
    //     width: "100%"
    //   }, 250);
    //   $(".teaching-panels").animate({
    //     left: negPanelsWidth
    //   }, 250, function() {
    //     // $(".teaching-panel").hide();
    //     return close.css("right", "0px");
    //   });
    //   return $(".teaching-panels").removeClass("opened");
    // });
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
