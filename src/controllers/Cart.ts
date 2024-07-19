// imports
import Cart from '../models/Cart';
import Product from '../interfaces/Product';
import * as session from 'express-session';

// constants
import { Router, Request, Response } from 'express';
import Database from '../database';

const router = Router();

router.get('/cart', function (req: Request, res: Response) {
    req.session.cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});
    const db = Database.getInstance()
    console.log(db.myvalue);

    res.render('pages/cart', {
        title: 'Cart',
        cart: req.session ? req.session.cart : new Cart({})
    });
});

/*router.post('/cart/add', function (req: Request, res: Response) {
    const products: Product[] = require('../../data/product-db.json');;
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
*/
module.exports = router;
