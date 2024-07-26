// imports
import Cart from '../models/Cart';
import IProduct from '../interfaces/Product';
import Product from '../models/Product';

// constants
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export const showCart = (req: Request, res: Response) => {
    req.session.cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});

    res.render('pages/cart', {
        title: 'Cart',
        cart: req.session.cart
    });
};

export const addProduct = async (req: Request, res: Response) => {
    const productID: string = req.body.product_id;

    if (!productID) {
        return res.json({ success: false });
    }

    const product = await ProductService.getProduct(productID);

    if (product) {
        const productName = product.title;
        const cart = req.session.cart ? new Cart(req.session.cart) : new Cart({});
        cart.addItem(product);

        // save in session after update the cart
        req.session.cart = cart;

        res.json({
            success: true,
            productName,
            cartItemsCount: req.session.cart.items.length
        });
    }
};

