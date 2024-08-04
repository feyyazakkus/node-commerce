import IProduct from '../interfaces/Product';
import ICartItem from '../interfaces/CartItem';

class CartItem implements ICartItem {
    product_id: string;
    product: IProduct;
    quantity: number;

    constructor(product: IProduct) {
        this.product_id = product.product_id;
        this.product = product;
        this.quantity = 1;
    }
}

export default CartItem;
