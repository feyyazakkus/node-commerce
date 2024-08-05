// library imports
import * as express from 'express';
import * as session from 'express-session';
import * as expressLayouts from 'express-ejs-layouts';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';

import { Request, Response, NextFunction } from 'express'
// module imports
import routes from './routes';
import config from './config';

// middlewares
import setLocals from './middlewares/setLocals';
import handleError from './middlewares/handleError';

// create a new express application instance
const app: express.Application = express();

// use cookie parser
app.use(cookieParser());

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

app.use(setLocals);
app.use('/', routes); // bind routes
app.use(handleError); // // error handler middleware

// start server
const port: Number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, function () {
    console.log('App running on port ' + port);
});
