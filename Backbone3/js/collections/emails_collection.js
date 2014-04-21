var app = app || {};

(function() {
    'use strict';

    var emails = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: app.email,

        // emails are sorted by their original insertion order.
        comparator: function (email) {
            return email.get('order');
        }
    });

    app.emails = new emails();
})();