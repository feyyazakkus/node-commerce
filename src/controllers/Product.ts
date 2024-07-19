import Product from '../interfaces/Product'

import { Router, Request, Response } from 'express';
const router = Router();

router.get('/products', function (req: Request, res: Response) {
    const products: Product[] = require('../../data/products.json');;
    const filteredProducts = products.filter(product =>  product.description);

    res.render('pages/products', {
        title: 'Products',
        products: filteredProducts
    });
});

module.exports = router;
