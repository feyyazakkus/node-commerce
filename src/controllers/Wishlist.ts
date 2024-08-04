// imports
import Cart from '../models/Cart';
import IProduct from '../interfaces/Product';
import Product from '../models/Product';

// constants
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import CartHelper from '../helpers/CartHelper';

export const showWishlist = (req: Request, res: Response) => {
    const products = [];

    res.render('pages/wishlist', {
        title: 'Wishlist',
        products
    });
};

// add product to wishlist
export const addToWishlist = async (req: Request, res: Response) => {
    const productID: string = req.body.product_id;

    if (!productID) {
        return res.json({ success: false });
    }

    // add product to wishlist
    res.json({ success: true });

};
