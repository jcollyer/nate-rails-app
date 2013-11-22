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
      $(".teaching-panels").css("margin-top","43px")
    else
      $("#main-nav").removeClass("new-nav").addClass("old-nav")
      $(".logo").removeClass("new-logo").addClass("old-logo")
      $(".teaching-panels").css("margin-top","131px")
  $(window).scroll ->
    pagePlace()

  #click Logo
  $(".logo").on "click", ->
    $("html, body").animate( scrollTop: 0, 450)


  #click biblebook
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
    #figure out how much to push screen right
    windowWidth       = $(window).width()
    negPanelsWidth    = "-160px"
    panelsPercentage  = 160 / windowWidth
    widthMinusPanels  = (1 - panelsPercentage) * 100 + "%"

    unless theID == openPanelID
      if panels.css("left") == negPanelsWidth
        panel.hide()
        thisPanel.show()
        panels.animate(left: "0px", 250)
        pageWrapper.animate(width: widthMinusPanels, 250)
        close.css("right", "-46px")
      else
        panel.fadeOut().css("left", negPanelsWidth)
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




