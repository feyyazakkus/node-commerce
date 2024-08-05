// imports
import Cart from '../models/Cart';
import IProduct from '../interfaces/Product';
import Product from '../models/Product';

// constants
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import CartHelper from '../helpers/CartHelper';

export const showCart = (req: Request, res: Response) => {

    res.render('pages/cart', {
        title: 'Cart',
        cart: CartHelper.getCart(req)
    });
};

// add product endpoint
export const addToCart = async (req: Request, res: Response) => {
    const productID: string = req.body.product_id;

    if (!productID) {
        return res.json({
            success: false,
            message: '"product_id" is required'
        });
    }

    const product = await ProductService.getProduct(productID);

    if (!product) {
        return res.json({
            success: false,
            message: 'Product not found'
        });
    }

    const cart = CartHelper.getCart(req);
    cart.addItem(product);
    CartHelper.saveCart(req, cart);

    res.json({
        success: true,
        cart: cart,
        productName: product.title,
        cartTotalItems: cart.totalItems
    });
};
