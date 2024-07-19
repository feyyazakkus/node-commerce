import IProduct from '../interfaces/Product';
import ICart from '../interfaces/Cart';

class Cart implements ICart {
    items: IProduct[];
    totalItems: number;
    totalPrice: number;

    constructor(cart: any) {
        this.items = cart.items || [];
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    addItem(product: IProduct) {
        this.items.push(product);
        this.totalItems = this.items.length;
    }
}

export default Cart;
