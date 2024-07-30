import { Request, Response } from 'express';

import Cart from '../models/Cart';

const CartHelper = {
    getCart: (req: Request): Cart => {
        return req.session.cart ? new Cart(req.session.cart) : new Cart({});
    },

    saveCart: (req: Request, cart: Cart): void => {
        req.session.cart = cart;
    }
}

export default CartHelper;
