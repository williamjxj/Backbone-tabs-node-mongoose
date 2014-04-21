William Jiang's Backbone sample:

Backbone.js, a multi-tabs page, node.js, mongoose, expressjs framework.

Some helpful tips:

* $ express -e Backbone-tabs-node-mongoose

* cd Backbone-tabs-node-mongoose && npm install

- mkdir -p Backbone3

  import and build all front-side Backbone-stuff into Backbone3/ folder, like:
  css/
  img/
  js/{{Model, View, Collection, Router, Events}}
  partials/
  vendors/
  index.html (ENTRY POINT)

- change express/app.js:

  app.set('views', path.join(__dirname, 'Backbone3'));
  
  app.use(express.static(path.join(__dirname, 'Backbone3')));
  
  app.use('/', routes);

- change express/index.js:

  router.get('/', function(req, res) {
    res.sendfile('./Backbone3/index.html');
  });

- For front-side, use some templates, such as Underscore templates, jQuery templates, handlebar.js etc.

- make sure mongod daemon is running

- npm start

- visit: localhost:4711/

