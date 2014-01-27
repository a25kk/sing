/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

(function ($) {
    $(document).ready(function () {
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
            // it's not realistic to think we can deal with all the bugs
            // of IE 6 and lower. Fortunately, all this is just progressive
            // enhancement.
            return;
        }
        var MTUserId='dac130ae-0a18-4f76-bb8e-9446a7476e1d';
        var MTFontIds = new Array();
        
        MTFontIds.push("710246"); // Monotype™ Modern WFS W01 Condensed 
        (function() {
        var mtTracking = document.createElement('script');
        mtTracking.type='text/javascript';
        mtTracking.async='true';
        mtTracking.src=('https:'==document.location.protocol?'https:':'http:')+'//fast.fonts.net/lt/trackingCode.js';

        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(mtTracking);
        })();
    });
}(jQuery));
