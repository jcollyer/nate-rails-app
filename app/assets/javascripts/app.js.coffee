$ ->
  #nav Click
  $("#main-nav li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 90
    $("html, body").animate( scrollTop: scroll, 400)

  # Safari styles
  if navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)
    console.log "true"
    $(".fancy-border-top.color-4").addClass("fancy-top-right")
    $(".fancy-border-top.color-2").addClass("fancy-top-right-dark")

  #nav Scroll
  pagePlace = ->
    pagePosition = $(window).scrollTop()
    if pagePosition > 50
      $("#main-nav").removeClass("old-nav").addClass("new-nav")
      $(".logo").removeClass("old-logo").addClass("new-logo")
      $(".teaching-panels").css("margin-top","57px")
    else
      $("#main-nav").removeClass("new-nav").addClass("old-nav")
      $(".logo").removeClass("new-logo").addClass("old-logo")
      $(".teaching-panels").css("margin-top","134px")

  if $(window).width() > 767
    $(window).scroll ->
      pagePlace()

  #click Logo
  $(".logo").on "click", ->
    $("html, body").animate( scrollTop: 0, 450)

  windowWrapperReSize = ->
    windowWidth       = $(window).width()
    negPanelsWidth    = "-160px"
    panelsPercentage  = 160 / windowWidth
    widthMinusPanels  = ( 1 - panelsPercentage ) * 100 + "%"
    $("#page-wrapper").css "width", widthMinusPanels

  windowWrapperSize = ->
    windowWidth       = $(window).width()
    negPanelsWidth    = "-160px"
    panelsPercentage  = 160 / windowWidth
    widthMinusPanels  = ( 1 - panelsPercentage ) * 100 + "%"
    $("#page-wrapper").animate(width: widthMinusPanels, 250)


  $(window).resize ->
    if $(".teaching-panels").hasClass("opened")
      windowWrapperReSize()

  #click biblebook
  if $(window).width() > 550
    $(".biblebook-hover").on "click", ->
      $this             = $(this)
      $el               = $this.siblings("img")
      panels            = $(".teaching-panels")
      panel             = $(".teaching-panel")
      openPanelID       = $(".teaching-panel:visible").data("id") or null
      pageWrapper       = $("#page-wrapper")
      theID             = $el.data("biblebook")
      thisPanel         = $(".teaching-panel[data-id='"+theID+"']")
      close             = $(".teaching-panel-close")

      $(".teaching-panels").addClass("opened")

      negPanelsWidth    = "-160px"
      unless theID == openPanelID
        if panels.css("left") == negPanelsWidth
          panel.hide()
          thisPanel.css("left", "0px").show()
          panels.animate(left: "0px", 250)
          close.css("right", "-46px")
          windowWrapperSize()
        else
          panel.css("left": negPanelsWidth, "display": "none")
          thisPanel.show().animate(left: "0px", 150)


  # click close button teaching teaching-panel
  $(".teaching-panel-close").on "click", ->
    negPanelsWidth    = "-160px"
    close             = $(".teaching-panel-close")
    $("#page-wrapper").animate(width: "100%", 250)
    $(".teaching-panels").animate(left: negPanelsWidth, 250, ->
      $(".teaching-panel").hide()
      close.css("right", "0px")
    )
    $(".teaching-panels").removeClass("opened")

  # MOBILE STUFF #

  #nav Click
  $(".hide-show").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 245
    $("html, body").animate( scrollTop: scroll, 400)

  # page buffer for mobile
  if $(window).width() < 768
    $("body").css("margin-top", "55px")

  # click nav hamburger
  $(".fa-bars").on "click", ->
    if $(".hide-show").css("display") == "none"
      $(".hide-show").fadeIn()
      $("body").animate({"marginTop": "270px"}, 500)
    else
      $(".hide-show").fadeOut()
      $("body").animate({"marginTop": "55px"})



