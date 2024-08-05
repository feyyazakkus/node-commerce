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
        if (this.isItemAlreadyInCart(product)) {
            this.updateItem(product);
            return;
        }

        this.createItem(product);
    }

    private createItem(product: IProduct) {
        const cartItem = new CartItem(product);
        this.items.push(cartItem);
        this.calculate();
    }

    private updateItem(product: IProduct) {
        // update quantity
        this.items.forEach(item => {
            if (item.product_id == product.product_id) {
                item.quantity += 1;
            }
        });
        this.calculate();
    }

    private isItemAlreadyInCart(product: IProduct) {
        return this.items.find(item => item.product_id == product.product_id);
    }

    private calculate() {
        let totalItems = 0;
        let totalPrice = 0;

        this.items.map(item => {
            totalPrice += item.product.price * item.quantity;
            totalItems += item.quantity;
        });

        this.totalPrice = Number(totalPrice.toFixed(2));
        this.totalItems = totalItems;
    }
}

export default Cart;
