$ ->
  $("#main-nav li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top
    $("html, body").animate( scrollTop: scroll, 250)

