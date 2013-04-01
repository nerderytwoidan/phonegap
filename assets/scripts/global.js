/* ---------------------------------------------------------------------
Global JavaScript

Target Browsers: All
Authors: Thane Woidan
------------------------------------------------------------------------ */

// Namespace Object
var NERD = NERD || {};

// Pass reference to jQuery and Namespace
(function($, APP) {

    // DOM Ready Function
    $(function() {
        APP.ExternalLinks.init();
    });

/* ---------------------------------------------------------------------
ExternalLinks
Author: Boilerplate

Launches links with a rel="external" in a new window
------------------------------------------------------------------------ */
APP.ExternalLinks = {
    init: function() {
        $(document).on('click', 'a[rel=external]', function(e) {
            window.open($(this).attr('href'));
            e.preventDefault();
        });
    }
};


}(jQuery, NERD));