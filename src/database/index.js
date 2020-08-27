const mongoose = require('mongoose');
// const mongoose = require('../database');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/noderest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose;