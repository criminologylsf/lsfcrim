(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.js23 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1.-biolgical-atavistic-736.png':'images/1.-biolgical-atavistic-368.png');
var a='data-src';var e=document.querySelector('.js23 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/2.-biolgical-brain-abnoramilties-and-biochemical-732.png':'images/2.-biolgical-brain-abnoramilties-and-biochemical-366.png');
var a='data-src';var e=document.querySelector('.js23 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3.-biolgical-twin-studies-and-xyy-734.png':'images/3.-biolgical-twin-studies-and-xyy-367.png');
var a='data-src';var e=document.querySelector('.js23 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/4.-individualistic-learning-theory-726.png':'images/4.-individualistic-learning-theory-363.png');
var a='data-src';var e=document.querySelector('.js23 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/5.-individualistic-psychodynamic-and-bowlby-730.png':'images/5.-individualistic-psychodynamic-and-bowlby-365.png');
var a='data-src';var e=document.querySelector('.js23 .slide5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6.-individualistic-psycholgoical-theory-eysenck-723.png':'images/6.-individualistic-psycholgoical-theory-eysenck-362.png');
var a='data-src';var e=document.querySelector('.js23 .slide6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/7.-sociological-functionalism-727.png':'images/7.-sociological-functionalism-363.png');
var a='data-src';var e=document.querySelector('.js23 .slide7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/8.-sociological-marxism-720.png':'images/8.-sociological-marxism-360.png');
var a='data-src';var e=document.querySelector('.js23 .slide8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/9.-sociological-interactionist-theories-and-labelling-710.png':'images/9.-sociological-interactionist-theories-and-labelling-355.png');
var a='data-src';var e=document.querySelector('.js23 .slide9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/10.-sociological-realist-theories-701.png':'images/10.-sociological-realist-theories-350.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js23 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});