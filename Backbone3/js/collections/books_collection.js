var api = api || {};

api.Library = Backbone.Collection.extend({
    model: api.Book,
    url: '/api/books'
});