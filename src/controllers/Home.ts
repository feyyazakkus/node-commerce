import { Router, Request, Response } from 'express';
const router = Router();

import IProduct from '../interfaces/Product';
import Product from '../models/Product';
import Database from '../database';

router.get('/', async function (req: Request, res: Response) {
    const db = Database.getInstance();
    const products: Product[] = await db.getAllProducts();

    res.render('pages/home', {
        title: 'Home',
        products: products
    });
});

module.exports = router;
