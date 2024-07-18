// imports
import Cart from '../models/Cart';

// constants
const express = require('express');
const router = express.Router();

router.get('/cart', function (req: express.Request, res: express.Response) {
    req.session.cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});

    res.render('pages/cart', {
        title: 'Cart',
        cart: req.session.cart
    });
});

router.post('/cart/add', function (req: express.Request, res: express.Response) {
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

module.exports = router;
