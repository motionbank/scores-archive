
var getCanvasWidth = function () {
    return jQuery('canvas').width();
}

var getCanvasHeight = function () {
    return jQuery('canvas').height();
}

var getKinectData = function ( id ) {
    var item = jQuery('#'+id);
    return {
        performer: item.data('key'),
        title: item.text(),
        duration : item.data('duration'),
        start: parseInt(item.data('start')),
        end: parseInt(item.data('end'))
    };
}
