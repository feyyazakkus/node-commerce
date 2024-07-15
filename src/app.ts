import * as express from 'express';
import * as session from 'express-session';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import config from './config';
import Cart from './models/Cart';
import Product from './interfaces/Product'

// Create a new express application instance
const app: express.Application = express();
const products: Product[] = require('./data/products.json');;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.get('/products', function (req: express.Request, res: express.Response) {
    const filteredProducts = products.filter(product =>  product.description);
    res.json(filteredProducts);
});

app.get('/', function (req: express.Request, res: express.Response) {
    res.render('index', { title: 'NodeCommerce' });
});

app.post('/cart/add', function (req: express.Request, res: express.Response) {
    const product = products.find(product => product.id === req.body.productId);

    if (!product) {
        return res.json({
            success: false,
            message: 'Product not found'
        });
    }

    const cart = new Cart(req.session.cart);
    cart.addItem(product);

    // save in session after update the cart
    req.session.cart = cart;

    res.json({
        success: true,
        cart: req.session.cart
    });
});

app.get('/cart', function (req: express.Request, res: express.Response) {
    req.session.cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});

    res.json({ cart: req.session.cart });
});

app.listen(3001, function () {
    console.log('App running on port 3001');
});
