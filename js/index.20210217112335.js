(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

window.plstp||(window.plstp=[]),plst=function(p,w){for(f in window.plstp)window.plstp[f]();window.plstp=[],window.plstp[p]=w},plrm=function(p){delete window.plstp[p]};
$(document).ready(function() {
js=new Plyr('.js audio', { 'iconUrl': 'css/plyr.svg', controls: ['play','progress','current-time','mute','volume'],storage:{enabled:false}});
js.volume=0.5;
js.on('play',function(){plst(function(){js.pause();})});

});