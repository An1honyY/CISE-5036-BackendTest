// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    journal: {
        type: String,
    },
    year: {
        type: String,
    },
    volume: {
        type: String
    },
    number: {
        type: String
    },
    pages: {
        type: String
    },
    doi: {
        type: String
    },
    practice: {
        type: String
    },
    claim: {
        type: String
    },
    evidence_result: {
        type: String
    },
    research_type: {
        type: String
    },
    participant_type: {
        type: String
    },
    status: {
        type: String,
        default: 'waiting',
        enum: ['waiting', 'approved', 'rejected']
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);