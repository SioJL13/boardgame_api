'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
    name:{
        type: String,
        required: 'Enter name of boardgame'
    },
    description:{
        type: String,
        required: 'Enter description of boardgame'
    },
    type:{
        type: String,
        enum: ['Strategy','Thematic','Family'],
        required: 'Enter a type of boardgme'
    },
    mechanism:{
        type: String,
        enum: ['Cooperative','Deck Building','Set Collection'],
        required: 'Enter a mechanism'
    },
    minPlayers:{
        type: Number,
        required: 'Enter min number of players'
    },
    maxPlayers:{
        type: Number,
        required: 'Enter max number of players'
    },
    playTime:{
        type: Number,
        required: 'Enter a playtime in minutes'
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('BoardGames', boardSchema);


