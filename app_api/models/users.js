var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  events: [{ type: Schema.Types.ObjectId, ref: 'Events'}]
});

module.exports = mongoose.model('Users', UserSchema);
