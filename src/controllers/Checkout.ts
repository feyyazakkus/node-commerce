import { Request, Response } from 'express';

export const showCheckout = (req: Request, res: Response): void => {

    res.render('pages/checkout', {
        title: 'Checkout',
    });
};
