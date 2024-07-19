import Product from '../interfaces/Product';
import ICart from '../interfaces/Cart';


class Cart {
    items: Product[];
    totalItems: number;
    totalPrice: number;

    constructor(cart: any) {
        this.items = cart.items;
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    addItem(product: Product) {
        this.items.push(product);
        this.totalItems = this.items.length;
    }
}

export default Cart;
