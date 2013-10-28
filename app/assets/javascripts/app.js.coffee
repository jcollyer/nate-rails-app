$ ->
  #nav Click
  $("#main-nav li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 70
    $("html, body").animate( scrollTop: scroll, 250)


  #nav Scroll
  pagePlace = ->
    pagePosition = $("body").scrollTop()
    if pagePosition > 10
      $("#main-nav").addClass("fixed-nav")
    else
      $("#main-nav").removeClass("fixed-nav")
  $(window).scroll ->
    pagePlace()

  $(".logo").on "click", ->
    $("html, body").animate( scrollTop: 0, 450)




