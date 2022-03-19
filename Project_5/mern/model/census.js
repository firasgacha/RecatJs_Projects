const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const CSchema = new Schema({
    city: {
        type: 'string',
        required:[true,'city state field required']
        },
    census:{
        type: Number,
        required:[true,'census state field required']
    }
});

module.exports = mongoose.model('Census',CSchema,'census');