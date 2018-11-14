const Joi = require("joi");
const mongoose = require("mongoose");

/**Models */
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  }
});

const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
  };
  return Joi.validate(genre, schema);
}


// module.exports.genreSchema = genreSchema;
// module.exports.Genre = Genre;
// module.exports.validate = validateGenre;

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
