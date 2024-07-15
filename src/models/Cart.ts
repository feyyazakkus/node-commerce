import Product from '../interfaces/Product';

class Cart implements Cart {
    items: Product[];
    totalItems: number;
    totalPrice: number;

    constructor(cart) {
        this.items = cart.items || [];
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    addItem = (product): void => {
        this.items.push(product);
        this.totalItems = this.items.length;
    }
}

export default Cart;
