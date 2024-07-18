const express = require('express');
const router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
    const products: Product[] = require('../../data/product-db.json');;
    const filteredProducts = products.filter(product => product.title);

    res.render('pages/home', {
        title: 'Home',
        products: filteredProducts
    });
});

module.exports = router;
