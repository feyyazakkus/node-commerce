// imports
import Cart from '../models/Cart';
import IProduct from '../interfaces/Product';

// constants
import { Router, Request, Response } from 'express';
import Database from '../database';

const router = Router();

router.get('/cart', function (req: Request, res: Response) {
    req.session.cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});


    res.render('pages/cart', {
        title: 'Cart',
        cart: req.session.cart
    });
});

router.post('/cart/add', function (req: Request, res: Response) {
    const db = Database.getInstance()
    const products: IProduct[] = db.getAllProducts();
    const product = products.find(product => product.product_id === req.body.productId);

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
