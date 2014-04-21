var app = app || {};

(function() {
    'use strict';

    var Todos = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: app.Todo,

        localStorage: new Backbone.LocalStorage('todos-backbone'),

        /*
         The collection’s completed() and remaining() methods return an array of finished and unfinished todos, respectively.
         this.filter, this.without and this.last are Underscore methods that are mixed in to Backbone.Collection so that the reader knows how to find out more about them.
         */
        completed: function () {
            return this.filter(function (todo) {
                return todo.get('completed');
            });
        },

        // Filter down the list to only todo items that are still not finished.
        remaining: function () {
            return this.without.apply(this, this.completed());
        },

        // We keep the Todos in sequential order, despite being saved by unordered
        // GUID in the database. This generates the next order number for new items.
        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },

        // Todos are sorted by their original insertion order.
        comparator: function (todo) {
            return todo.get('order');
        }
    });

    app.todos = new Todos();
})();