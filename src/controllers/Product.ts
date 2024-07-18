import Product from './interfaces/Product'

const express = require('express');
const router = express.Router();

router.get('/products', function (req: express.Request, res: express.Response) {
    const products: Product[] = require('../../data/products.json');;
    const filteredProducts = products.filter(product =>  product.description);

    res.render('pages/products', {
        title: 'Products',
        products: filteredProducts
    });
});

module.exports = router;
