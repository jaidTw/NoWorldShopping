// No World Shopping - Simple blocker for worldshopping.jp
(function() {
    'use strict';

    // Check if current page is worldshopping.jp and block it
    function checkCurrentPage() {
        if (window.location.hostname.includes('worldshopping.jp')) {
            document.body.innerHTML = '<h1>Access to World Shopping blocked by No World Shopping extension</h1>';
            return;
        }
    }

    // Initialize blocking
    function init() {
        checkCurrentPage();
    }

    // Start immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
