import { Router } from 'express';

import { showHome } from './controllers/Home';
import { showProduct } from './controllers/Product';
import { showCart, addProduct } from './controllers/Cart';
import { showCheckout } from './controllers/Checkout';

const router = Router();

// home
router.get('/', showHome);

// products
router.get('/products/:id', showProduct);

// cart
router.get('/cart', showCart);
router.post('/cart/add', addProduct);

// checkout
router.get('/checkout', showCheckout);


export default router;
