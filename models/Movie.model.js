const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: [String],
  },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/originals/97/38/ee/9738eef35a74962e7ba871bcadb15499.jpg",
  },
  description: {
    type: String,
  },
  showtimes: {
    type: [String],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
