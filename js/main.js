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
        tl.to($logo, 1, {scale:0.65});
        tl.add('start',0);
        tl.add('logoIn',2);
        tl.to($bg,1.5,{opacity:1});
        tl.to($logo,.8, {scale: 0.6, opacity:1, ease: Power4.easeOutIn, y: -300 }, 'logoIn');
        tl.play();
    }
};

window.onload = function () {
    APP.init();
};