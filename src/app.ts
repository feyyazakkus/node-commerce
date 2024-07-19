// library imports
import * as express from 'express';
import * as session from 'express-session';
import * as expressLayouts from 'express-ejs-layouts';
import * as bodyParser from 'body-parser';
import * as path from 'path';

// module imports
import config from './config';

// Create a new express application instance
const app: express.Application = express();

// set template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// bodyparser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public folder
app.use(express.static('public'));

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
const Error = require('./controllers/Error');

// bind controllers to routes
app.use('/', Home);
app.use('/', Product);
app.use('/', Cart);
app.use('/', Checkout);
app.use(Error);

// start server
const port: Number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, function () {
    console.log('App running on port ' + port);
});
