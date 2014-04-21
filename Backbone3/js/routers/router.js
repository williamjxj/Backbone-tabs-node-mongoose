/**
 * http://addyosmani.github.io/backbone-fundamentals/#getting-set-up
 So does Backbone.js have Controllers? Not really. Backbone’s Views typically contain Controller logic,
 and Routers are used to help manage application state, but neither are true Controllers according to classical MVC.
 */
var app = app || {};

(function () {
    'use strict';

    // Todo Router
    // ----------
    var TodoRouter = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function (param) {
            // Set the current filter to be used
            app.TodoFilter = param || '';

            // Trigger a collection filter event, causing hiding/unhiding
            // of Todo view items
            app.todos.trigger('filter');
        }
    });

    app.TodoRouter = new TodoRouter();
    Backbone.history.start();
})();

//email router:
(function() {
    'use strict';

    var EmailRouter = Backbone.Router.extend({
        routes: {
            '#new': 'new',
            '#update': 'update',
            '#delete': 'delete'
        }
    });

})();

