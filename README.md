William Jiang's Backbone sample:

Backbone.js, a multi-tabs page, node.js, mongoose, expressjs framework.

# Some helpful tips:

1. $ express -e Backbone-tabs-node-mongoose

2. $ cd Backbone-tabs-node-mongoose && npm install

3. $ mkdir -p Backbone3

4.  import and build all front-side Backbone-stuff into Backbone3/ folder, like:
  css/
  img/
  js/{{Model, View, Collection, Router, Events}}
  partials/
  vendors/
  index.html (ENTRY POINT)

5. change express/app.js:

  app.set('views', path.join(__dirname, 'Backbone3'));
  
  app.use(express.static(path.join(__dirname, 'Backbone3')));
  
  app.use('/', routes);

6. change express/index.js:

  router.get('/', function(req, res) {
    res.sendfile('./Backbone3/index.html');
  });

7. For front-side, use some templates, such as Underscore templates, jQuery templates, handlebar.js etc.

8. make sure mongod daemon is running

9. $ npm start ( or: nohup npm stall >/dev/null 2>&1 &; )

10. visit: localhost:4711/

That's it!
