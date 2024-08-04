import { Router } from 'express';

import { showHome } from './controllers/Home';
import { showProduct } from './controllers/Product';
import { showWishlist, addToWishlist } from './controllers/Wishlist';
import { showCart, addToCart } from './controllers/Cart';
import { showCheckout } from './controllers/Checkout';

const router = Router();

// home
router.get('/', showHome);

// products
router.get('/products/:id', showProduct);

// wishlist
router.get('/wishlist', showWishlist);
router.post('/wishlist/add', addToWishlist);

// cart
router.get('/cart', showCart);
router.post('/cart/add', addToCart);

// checkout
router.get('/checkout', showCheckout);


export default router;
