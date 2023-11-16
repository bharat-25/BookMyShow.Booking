"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = void 0;
const mongoose = require("mongoose");
exports.MovieSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    rated: String,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number,
    },
    countries: [String],
});
//# sourceMappingURL=movie.schema.js.map