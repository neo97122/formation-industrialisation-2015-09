define(['jquery', 'bootstrap'], function($) {
   'use strict';

    return function() {
        $('.show-contact').click(function(e) {
            e.preventDefault();

            $('#modal-contact').modal();
        });
    };
});