var youtube_pattern = /youtube[.]com\/embed\/([^"?]+)/gi;

plugin.onMessageInsertion = function(event){
    var text = event.content;
    if( text.match(youtube_pattern) ) {
        var youttube_uri = text.match(youtube_pattern)[0];
        youttube_uri = youttube_uri.replace('youtube.com/embed/', '');

        // Wrap frame to work with image toggle plugin
        var iframe = '<iframe id="ytplayer" width="640" height="390" src="https://www.youtube.com/embed/' + youttube_uri +'" frameborder="0" allowfullscreen></iframe>';
        // replace
        var last_insertion = Talker.getLastInsertion();
        last_insertion.html(iframe);
    }
};
