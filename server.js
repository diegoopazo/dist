var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./models/userListModel'),
    bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

mongoose.Promise = global.Promise;
//userdb not users
mongoose.connect('mongodb://localhost/Userdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//missed an s
var routes = require('./routes/userListRoutes');
routes(app);

app.listen(port);

console.log('user List started on:' + port);