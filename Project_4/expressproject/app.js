const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/vocab';
mongoose.connect(mongoDB, {useNewUrlParser:true,useUnifiedTopology:true});
// app.get('/', (req, res) => {
//     res.send('Expressive');
// })

app.use(express.json());
app.use('/api', require('./route/route'));

app.listen(port, () => {
    console.log('Server Listening on port ' + port);
});