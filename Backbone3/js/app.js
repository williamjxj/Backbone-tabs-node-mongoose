var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
    $('a[href="#todoapps"]').click(function() {
        if($('#todoapps').html().length === 0) {
            // $('div#todoapps').html($('#todoapps-template').html());
            $.get('partials/todo.html', function(data) {
                $('#todoapps').html(data);

                new app.AppView();
            });
        }
    });

    $('a[href="#bookapps"]').click(function() {
        if($('#bookapps').html().length === 0) {
            $.get('partials/book.html', function(data) {
                $('#bookapps').html(data);

                new api.LibraryView();
            });
        }
    });

    var books = [
        { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
        { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
    ];

    if ($('#bookapps').html().length === 0) {
        $.get('css-sprites/index.html', function(data) {
            $('#homeapps').html(data);
        });
    }

    if ($('#emailapps').html().length === 0) {
        $.get('emails/list.html', function(data) {
            $('#emailapps').html(data);
        });
    }

    // no need:
    //$('#myTab a:first').tab('show');

});