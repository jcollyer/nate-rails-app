jQuery(function ($) {

    mediaPath = document.URL + '/biblebooks/17.json',

    $.getJSON(mediaPath, function( data ) {
      var items = [];
      var teachings = data.teachings

      $.each( teachings, function( key, val ) {
        var teachings = [];
        var id = val.id;
        var mp3 = val.mp3;
        var name = val.name;
        var refurl = val.refurl;
        var podcasturl = val.podcasturl;
        var biblebookName = '1 thessss';

        items.push(
          '<div class="teaching-item">' +
            '<div class="play-this-teaching button-play-list" data-name="'+name+'" data-mp3="'+mp3+'" data-refurl="'+refurl+'" data-podcasturl="'+podcasturl+'" data-biblebook="'+biblebookName+'"></div>' +
            '<p>'+name+'</p>' +
          '</div>'
         );
        console.log(items);
      });

      // debugger;
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );

      $( items.join( "" )).appendTo( ".teaching-chapter" );
    });


    // var supportsAudio = !! document.createElement('audio').canPlayType;
    // if (supportsAudio) {
    //     var index = 0,
    //         playing = false;
    //     mediaPath = document.URL + '/biblebooks/17/',
    //     extension = '',
    //     // tracks = teachings,
    //     trackCount = tracks.length,
    //     npAction = $('#npAction'),
    //     npTitle = $('#npTitle'),
    //     audio = $('#audio1').bind('play', function () {
    //         playing = true;
    //         npAction.text('Now Playing...');
    //     }).bind('pause', function () {
    //         playing = false;
    //         npAction.text('Paused...');
    //     }).bind('ended', function () {
    //         npAction.text('Paused...');
    //         if ((index + 1) < trackCount) {
    //             index++;
    //             loadTrack(index);
    //             audio.play();
    //         } else {
    //             audio.pause();
    //             index = 0;
    //             loadTrack(index);
    //         }
    //     }).get(0),
    //     btnPrev = $('#btnPrev').click(function () {
    //         if ((index - 1) > -1) {
    //             index--;
    //             loadTrack(index);
    //             if (playing) {
    //                 audio.play();
    //             }
    //         } else {
    //             audio.pause();
    //             index = 0;
    //             loadTrack(index);
    //         }
    //     }),
    //     btnNext = $('#btnNext').click(function () {
    //         if ((index + 1) < trackCount) {
    //             index++;
    //             loadTrack(index);
    //             if (playing) {
    //                 audio.play();
    //             }
    //         } else {
    //             audio.pause();
    //             index = 0;
    //             loadTrack(index);
    //         }
    //     }),
    //     li = $('#plList li').click(function () {
    //         var id = parseInt($(this).index());
    //         if (id !== index) {
    //             playTrack(id);
    //         }
    //     }),
    //     loadTrack = function (id) {
    //         $('.plSel').removeClass('plSel');
    //         $('#plList li:eq(' + id + ')').addClass('plSel');
    //         npTitle.text(tracks[id].name);
    //         index = id;
    //         audio.src = mediaPath + tracks[id].file + extension;
    //     },
    //     playTrack = function (id) {
    //         loadTrack(id);
    //         audio.play();
    //     };
    //     extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
    //     loadTrack(index);
    // }
});
