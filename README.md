
# todomvc

    http://todomvc.com/architecture-examples/backbone/
    https://github.com/tastejs/todomvc
    http://addyosmani.github.io/backbone-fundamentals/#exercise-1-todos---your-first-backbone.js-app

* [Annotated source code](http://backbonejs.org/docs/backbone.html)
* [Applications built with Backbone.js](http://backbonejs.org/#examples)
* [FAQ](http://backbonejs.org/#faq)


# expressjs

* http://expressjs.com/guide.html

 $ express -e myapp
 $ cd myapp && npm install
 $ DEBUG=myapp node app; DEBUG=express:* node ./bin/www
 $ npm start

change port to 4711


** Book
  http://addyosmani.github.io/backbone-fundamentals/#getting-set-up
  https://github.com/addyosmani/backbone-fundamentals/blob/gh-pages/practicals/exercise-2/site/index.html

**** Backbone.sync
 url             HTTP Method  Operation
 /api/books      GET          Get an array of all books
 /api/books/:id  GET          Get the book with id of :id
 /api/books      POST         Add a new book and return the book with an id attribute added
 /api/books/:id  PUT          Update the book with id of :id
 /api/books/:id  DELETE       Delete the book with id of :id

**** add:
 jQuery.post( '/api/books', {
     'title': 'JavaScript the good parts',
     'author': 'Douglas Crockford',
     'releaseDate': new Date( 2008, 4, 1 ).getTime()
 }, function(data, textStatus, jqXHR) {
     console.log( 'Post response:' );
     console.dir( data );
     console.log( textStatus );
     console.dir( jqXHR );
 });