import IProduct from '../interfaces/Product';
import ICart from '../interfaces/Cart';
import CartItem from './CartItem';
import ICartItem from '../interfaces/CartItem';
class Cart implements ICart {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;

    constructor(cart: any) {
        this.items = cart.items || [];
        this.totalItems = cart.totalItems || 0;
        this.totalPrice = cart.totalPrice || 0;
    }

    addItem(product: IProduct) {
        const cartItem = new CartItem(product);
        this.items.push(cartItem);
        this.calculate();
    }

    private calculate() {
        const cartTotal = this.items.reduce((acc, item) => {
            return acc + item.product.price;
        }, 0);
        this.totalPrice = cartTotal;
        this.totalItems = this.items.length;
    }
}

export default Cart;
