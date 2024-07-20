import IProduct from '../interfaces/Product';

class Product implements IProduct {
    product_id: string;
    title: string;
    description: string;
    image_url: string;
    category_id: string;
    price: number;

    constructor(product: Product) {
        this.product_id = product.product_id;
        this.title = product.title;
        this.description = product.description;
        this.category_id = product.category_id;
        this.image_url = product.image_url;
        this.price = product.price;
    }
}

export default Product;
