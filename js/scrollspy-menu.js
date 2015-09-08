define(['jquery', 'bootstrap'], function($) {
    'use strict';

    return function() {
        $('body').scrollspy({ target: '#navbar-collapse' });
    };
});
