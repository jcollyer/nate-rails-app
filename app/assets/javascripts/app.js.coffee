$ ->
  #nav Click
  $("#main-nav li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 125
    $("html, body").animate( scrollTop: scroll, 250)


  #nav Scroll
  pagePlace = ->
    pagePosition = $("body").scrollTop()
    if pagePosition > 30
      $("#main-nav").removeClass("old-nav").addClass("new-nav")
      $(".logo").removeClass("old-logo").addClass("new-logo")
    else
      $("#main-nav").removeClass("new-nav").addClass("old-nav")
      $(".logo").removeClass("new-logo").addClass("old-logo")
  $(window).scroll ->
    pagePlace()

  #click Logo
  $(".logo").on "click", ->
    $("html, body").animate( scrollTop: 0, 450)


  #click biblebook
  $(".biblebook-hover").on "click", ->
    $el = $(this).siblings("img")
    theID = $el.data("biblebook")
    console.log theID
    if $(".teaching-panels").css("left") == "-120px"
      $(".teaching-panel").hide()
      $(".teaching-panel").find("[data-id='" + theID + "']").parent(".teaching-panel").show()
      $(".teaching-panels").animate(left: "0px", 250)
    else
      $(".teaching-panels").animate(left: "-120px", 150, ->
        $(".teaching-panel").hide()
        $(".teaching-panel").find("[data-id='" + theID + "']").parent(".teaching-panel").show( ->
          $(".teaching-panels").animate(left: "0px", 150)
        )
      )

  # click close button teaching teaching-panel
  $(".teaching-panel-close").on "click", ->
     $(".teaching-panels").animate(left: "-120px", 250, ->
        $(".teaching-panel").hide()
      )




