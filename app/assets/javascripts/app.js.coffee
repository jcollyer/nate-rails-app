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

  #click Logo
  $(".logo").on "click", ->
    $("html, body").animate( scrollTop: 0, 450)


  #click biblebook
  $(".biblebook-cover img").on "click", ->
    $el = $(this)
    theID = $el.data("biblebook")

    if $(".teaching-panels").css("left") == "-160px"
      $(".teaching-panels").animate(left: "0px", 450)
    else
      $(".teaching-panels").animate(left: "-160px", 450, ->
        $(".teaching-item").hide()
        $(".teaching-panels").find("[data-id='" + theID + "']").show( ->
          $(".teaching-panels").animate(left: "0px", 450)
        )
      )



