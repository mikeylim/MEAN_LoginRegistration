var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    score: Number,    
}, {timestamps: true, usePushEach: true})

mongoose.model("User", UserSchema);