var app = app || {};

(function() {
    'use strict';
    app.email = Backbone.Model.extend({
        defaults: {
            name: '',
            email: '',
            phone: '',
            fellowShip: '',
            address: '',
            city: '',
            lname: '',
            fname: '',
            desc: '',
            updated_at: '',
            active: true
        },
        toggle: function() {
            this.save({
                active: !this.get('active')
            });
        }
    });
})();