// library imports
import * as express from 'express';
import * as session from 'express-session';
import * as expressLayouts from 'express-ejs-layouts';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';

// module imports
import config from './config';

// Create a new express application instance
const app: express.Application = express();
const port = process.env.PORT || 3000;


// set template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public folder
app.use(express.static('public'));

// set cors
app.use(cors({
    origin:[config.clientURL],
    methods:['GET','POST'],
    credentials: true // enable set cookie
}));
app.use(session({
    secret: 'mycartapp',
    resave: false,
    saveUninitialized: true
}));

// get controllers
const Home = require('./controllers/Home');
const Product = require('./controllers/Product');
const Cart = require('./controllers/Cart');
const Checkout = require('./controllers/Checkout');

// bind controllers to routes
app.use('/', Home);
app.use('/', Product);
app.use('/', Cart);
app.use('/', Checkout);

// error page handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('pages/error', { title: '404' });
});

app.listen(port, function () {
    console.log('App running on port ' + port);
});
