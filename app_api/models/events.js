var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  dateTime: { type: Date, "default": Date},
  location: String,
  name: String,
  invitees: [String],
  comments: String,
  user: { type: Schema.Types.ObjectId, ref: 'Users'}
})

module.exports = mongoose.model('Events', eventSchema);
