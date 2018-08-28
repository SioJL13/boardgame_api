'use strict'

var mongoose = require('mongoose');
var BoardGame = mongoose.model('BoardGames');

/**
 * GET - Fetch all the boargames
 * @param {*} req 
 * @param {*} res 
 */
exports.get_all_boardgames = function(req, res){
    BoardGame.find({}, function(err,game){
        if(err){
            res.send(err);
        } else{
            res.json(game)
        }
    });
};

/**
 * POST - Create a new boardgame
 * @param {*} req 
 * @param {*} res 
 */
exports.create_new_boardgame = function(req,res){
    var new_game = new BoardGame(req.body);
    new_game.save(function(err,game){
        if(err){
            res.send(err);
        }else{
            res.json(game);
        }
    });
};

/**
 * GET - Fetch by ID a boardgame
 * @param {*} req 
 * @param {*} res 
 */
exports.get_boardgame = function(req,res){
    console.log("GETTING");
    console.log(req.params.gameId)
    BoardGame.findById(req.params.gameId, function(err,game){
        if(err){
            res.send(err);
        } else{
            res.json(game);
        }
    });
};

/**
 * PUT - Update a boardgame by ID
 * @param {*} req 
 * @param {*} res 
 */
exports.update_boardgame = function(req,res){
    //new -> return the new modified document
    BoardGame.findOneAndUpdate({_id: req.params.gameId}, 
        req.body, {new: true}, function(err,game){
        if(err){
            res.send(err);
        }else{
            res.json(game);
        }
    });
};

/**
 * DELETE - Delete a boardgame by ID
 * @param {*} req 
 * @param {*} res 
 */
exports.delete_boardgame = function(req,res){
    BoardGame.remove({
        _id: req.params.gameId
    }, function(err,game){
        if(err){
            res.send(err);
        }else{
            res.json({message: "Data deleted"});
        }
    });
};