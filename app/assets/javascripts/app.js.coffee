$ ->
  #nav Click
  $("#main-nav li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 90
    $("html, body").animate( scrollTop: scroll, 400)

  $(".about-link").click (event) ->
    event.preventDefault()
    scroll = $("#about-link").offset().top - 90
    $("html, body").animate( scrollTop: scroll, 400)

  # Safari styles
  if navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)
    $(".fancy-border-top.color-4").addClass("fancy-top-right")
    $(".fancy-border.color-3").addClass("fancy-bottom-right")
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
  $(".biblebook-hover").on "click", ->
    if $(window).width() < 767
      thisID   = $(this).data("id")
      thisLink = "/biblebooks/"+thisID
      window.location = thisLink
    else
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

  # Click Nav Hamburger
  $("#hamburger").on "click", ->
    console.log $(this).css("color")
    if $(this).css("color") == "rgb(255, 255, 255)"
      $(this).css("color","#2e97d7")
      $("#mobile-links").fadeIn()
    else
      $(this).css("color","#ffffff")
      $("#mobile-links").fadeOut()

  # Mobile Nav Click
  $("#mobile-links li").click ->
    el   = $(this).text()
    temp = "#" + el + "-link"
    scroll = $(temp).offset().top - 20
    $("html, body").animate( scrollTop: scroll, 400)
    $("#mobile-links").fadeOut()
    $("#hamburger").css("color","#ffffff")


  # add black background to mobile show pages
  $("body").css("background-color","#111111") if $(".js-black-background").length

  # split chapter into two lines on Biblebook show pages
  $('.js-split').each ->
    text   = $(this).text()
    split  = text.split("-")
    first  = split[0]
    second = split[1] || ""

    $(this).html("<span>"+first+"</span>")
    unless second == ""
      $(this).append("<span> - "+second+"</span>")





