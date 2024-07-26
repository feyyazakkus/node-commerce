import Product from '../interfaces/Product'
import { Request, Response } from 'express';

export const showProduct = (req: Request, res: Response) => {
    const products: Product[] = require('../../data/products.json');;
    const product = products.find(product =>  product.product_id == req.params.id);

    res.render('pages/products', {
        title: 'Products',
        product: product
    });
};
