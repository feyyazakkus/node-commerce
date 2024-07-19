import { Router, Request, Response } from 'express';
const router = Router();

import Product from '../interfaces/Product';
import Database from '../database';

router.get('/', function (req: Request, res: Response) {
    const db = Database.getInstance()
    const products: Product[] = db.getAllProducts();

    res.render('pages/home', {
        title: 'Home',
        products: products
    });
});

module.exports = router;
