'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    api = {};
//mongoose.connect( 'mongodb://localhost/books' );

var SCACS = new Schema({
    name: String,
    email: String,
    phone: String,
    fellowShip: String,
    address: String,
    city: String,
    lname: String,
    fname: String,
    desc: String,
    updated_at: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});
var scac = mongoose.model('SurreyChristianAllianceChurch', SCACS);

api.list = function(req, res) {
    scac.find().
        sort('-updated_at').
        exec( function ( err, members, count ){
            res.json( members );
        });
};
api.emails = api.list;

api.search = function(req, res) {
    var q = req.query.q;
    var sortBy = req.query.sort;

    var limit = req.query.limit;
    var skip = req.query.offset;
    var desc = req.query.desc==='true' ?  'asc' :'desc';
    console.log(req.query);

    //.find().or([{ 'first': { $regex: re }}, { 'last': { $regex: re }}, { 'email': { $regex: re }}, { 'name': { $regex: re }}])
    if(q) {
        var re = new RegExp(q, 'i');
        return scac.find(
            { email: { $regex: re } },
            null,
            {
                skip: skip,
                limit: limit,
                sort: {
                    email: desc
                }
            },
            function(err, data) {
                if (!err) {
                    console.log(data);
                    return res.json(data); //more precise
                } else {
                    return res.send(err);
                }
            }
        );
    }
    else {
        return scac.find(
            {},
            null,
            {
                skip: skip,
                limit: limit,
                sort: {
                    name: desc
                }
            },
            function(err, data) {
                if (!err) {
                    console.log(data);
                    return res.json(data);
                } else {
                    return res.send(err);
                }
            }
        );
    }
};

api.getOne = function(req, res) {
    scac.findById( req.params.id, function ( err, member ){
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log(member);
        res.json(member);
    });
};

api.create = function(req, res) {
    var member = new  scac({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        fellowShip : req.body.fellowShip.join(','),
        address : req.body.address,
        city : req.body.city,
        lname : req.body.lname,
        fname : req.body.fname,
        desc : req.body.desc,
        updated_at : Date.now()
    });
    member.save(function(err) {
        if(err) console.log(err);
        res.json(member);
    });
};

api.update = function(req, res) {
    scac.findById( req.params.id, function ( err, member ){
        member.name = req.body.name;
        member.email = req.body.email;
        member.phone = req.body.phone;
        member.fellowShip = req.body.fellowShip.join(',');
        member.address = req.body.address;
        member.city = req.body.city;
        member.lname = req.body.lname;
        member.fname = req.body.fname;
        member.desc = req.body.desc;
        member.updated_at = Date.now();

        member.save( function ( err, member, count ){
            if(err) {
                console.log(err);
                res.send(err);
            }
            res.json( 'Done.' );
        });
    });
};

api.delete = function(req, res) {
    scac.findById( req.params.id, function ( err, member ){
        member.remove( function ( err, data ){
            if(err) console.log(err);
            res.json('delete ['+req.params.id + '] successfully.');
        });
    });
};

/************************************************************
 * Application routes
 */
module.exports = function(app) {

    app.get('/api/list', api.list);
    app.get('/api/emails', api.emails);

    // 4. get
    app.get('/api/email/:id', api.getOne);

    // 1. query
    //api/email?desc=false&limit=20&offset=0&sort=name
    app.get('/api/search', api.search);

    // 3. post
    app.post('/api/email', api.create);

    // 2.update
    // Server API Routes
    app.put('/api/email/:id', api.update);

    // 5. delete
    app.delete('/api/email/:id', api.delete);

    // All undefined api routes should return a 404
    app.get('/api/*', function(req, res) {
        res.send(404);
    });

};