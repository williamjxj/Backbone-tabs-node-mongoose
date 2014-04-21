var api = api || {};

api.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    //template: _.template( $( '#bookTemplate' ).html() ),

    events: {
        'click .delete': 'deleteBook'
    },

    deleteBook: function() {
        //Delete model
        this.model.destroy();

        //Delete view
        this.remove();
    },


    render: function() {

        this.template = _.template( $( '#bookTemplate' ).html() );

        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    }

});


api.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function( ) {

        //Now we just need to make the view render again when a new model is added.
        //this.listenTo(this.collection, 'add', this.renderBook);
        //this.collection = new book.Library( initialBooks );
        //this.render();
        this.collection = new api.Library();
        this.collection.fetch({reset: true}); // NEW
        this.render();

        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render ); // NEW
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and bookending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new api.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },

    events: {
        'click #add': 'addBook',
        'click .delete': 'deleteBook'
    },

    addBook: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() != '' )
            {
                if( el.id === 'keywords' ) {
                    formData[ el.id ] = [];
                    _.each( $( el ).val().split( ' ' ), function( keyword ) {
                        formData[ el.id ].push({ 'keyword': keyword });
                    });
                } else if( el.id === 'releaseDate' ) {
                    formData[ el.id ] = $( '#releaseDate').val();
                } else {
                    formData[ el.id ] = $( el ).val();
                }
            }
            // Clear input field value
            $( el ).val('');
        });
        //this.collection.add( new api.Book( formData ) );
        this.collection.create( formData );
    },

    deleteBook: function() {
        console.log(this.model);
        this.model.destroy();

        this.remove();
    }
});