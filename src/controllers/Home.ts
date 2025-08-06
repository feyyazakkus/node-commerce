import { Request, Response } from 'express';

import IProduct from '../interfaces/Product';
import Product from '../models/Product';
import Database from '../database';
import ProductService from '../services/ProductService';

export const showHome = async (req: Request, res: Response) => {
    const products: Product[] = await ProductService.getAllProducts();

    res.render('pages/home', {
        title: 'Home',
        products: products
    });
};
