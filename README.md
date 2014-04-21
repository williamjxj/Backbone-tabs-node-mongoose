William Jiang's Backbone sample:

Backbone.js, a multi-tabs page, node.js, mongoose, expressjs framework.

- express/app.js:
  app.set('views', path.join(__dirname, 'Backbone3'));
  
  app.use(express.static(path.join(__dirname, 'Backbone3')));
  
  app.use('/', routes);

- express/index.js:
  router.get('/', function(req, res) {
    res.sendfile('./Backbone3/index.html');
  });

- For front-side, use some templates, such as Underscore templates, jQuery templates, handlebar.js etc.
