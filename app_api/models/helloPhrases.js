var mongoose = require( 'mongoose' );
var random = require('mongoose-simple-random');

var hpSchema = new mongoose.Schema({
  phrase: {type: String, required: true}
});

hpSchema.plugin(random);

mongoose.model('helloPhrase', hpSchema, 'helloPhrases');