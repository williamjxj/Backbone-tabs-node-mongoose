var express = require('express');
var book = express.Router();
var mongoose = require( 'mongoose' );

// mongoose.connect( 'mongodb://localhost/books' );

//Schemas
var Keywords = new mongoose.Schema({
    keyword: String
});

var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: String,
    keywords: [ Keywords ]
});

// Models:
var BookModel = mongoose.model( 'Book', Book );


/* GET books listing. */
book.get('/', function(req, res) {
  res.send('get /');
});
book.get('/books', function(req, res) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return res.send( books );
        } else {
            return console.log( err );
        }
    });
    //res.send('get /api/books');
});
book.get('/books/:id', function(req, res) {
    return BookModel.findById( req.params.id, function( err, book ) {
        if( !err ) {
            return res.send( book );
        } else {
            return console.log( err );
        }
    });
    //res.send('get /api/books/:id');
});

//Insert a new book
book.post( '/books', function( req, res ) {
    var book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        //releaseDate: new Date().getTime(),
        releaseDate: req.body.releaseDate,
        keywords: req.body.keywords
    });
    return book.save( function( err ) {
        if( !err ) {
            console.log( 'created' );
        } else {
            console.log( err );
        }
        return res.send( book );
    });
});

//Update a book
book.put( '/books/:id', function( req, res ) {
    console.log( 'Updating book ' + req.body.title );
    return BookModel.findById( req.params.id, function( err, book ) {
        book.title = req.body.title;
        book.author = req.body.author;
        book.releaseDate = req.body.releaseDate;
        book.keywords = req.body.keywords; // NEW

        return book.save( function( err ) {
            if( !err ) {
                console.log( 'book updated' );
            } else {
                console.log( err );
            }
            return res.send( book );
        });
    });
});
//Delete a book
book.delete( '/books/:id', function( req, res ) {
    console.log( 'Deleting book with id: ' + req.params.id );
    return BookModel.findById( req.params.id, function( err, book ) {
        return book.remove( function( err ) {
            if( !err ) {
                console.log( 'Book removed' );
                return res.send( '' );
            } else {
                console.log( err );
            }
        });
    });
});

module.exports = book;
