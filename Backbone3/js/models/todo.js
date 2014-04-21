var app = app || {};

(function() {
    'use strict';

    // Our basic 'Todo' model has `title`, `order`, and `completed` attributes.
    app.Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },
        toggle: function() {
            this.save({
                completed: !this.get('completed')
            });
        }
    })
})();