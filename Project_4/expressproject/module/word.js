const mongoose = require('mongoose');
const schema = mongoose.Schema;

const WordSchema = new schema({
    word : {
        type:String,
        required: [true,'word required']
    },
    def : {
        type:String,
        required: [true,'definition required']
    }
});

const Word = mongoose.model('word', WordSchema, 'word');

module.exports = Word;
