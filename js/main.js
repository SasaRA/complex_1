/**
 * Created by Sasa RA on 10/20/15.
 */


var $bg = document.getElementById('bg');
var $logo = document.getElementById('logo');
var tl = new TimelineMax({paused:true});

var APP = {
    init : function() {
        console.log("==== init ====");

        APP.loadPage();
    },
    loadPage : function() {
        console.log("==== loadPage ====");
        tl.to($logo, 1, {scale:0.6});
        tl.add('start',0);
        tl.add('logoIn',2);
        tl.to($bg,1.2,{opacity:1, ease: Power4.easeIn});
        tl.to($logo,1, {scale: 0.6, opacity:1, ease: Power4.easeOut, y: -300 }, 'logoIn');
        tl.play();
    }
};

window.onload = function () {
    APP.init();
};