// imports
import Cart from '../models/Cart';
import IProduct from '../interfaces/Product';
import Product from '../models/Product';

// constants
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import CartHelper from '../helpers/CartHelper';

export const showCart = (req: Request, res: Response) => {
    req.session.cart = CartHelper.getCart(req);

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
        const cart = CartHelper.getCart(req);
        cart.addItem(product);
        CartHelper.saveCart(req, cart);

        res.json({
            success: true,
            productName,
            cartItemsCount: cart.items.length
        });
    }
};

