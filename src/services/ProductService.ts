// src/services/ProductService.ts
import Product from '../models/Product';
import IProduct from '../interfaces/Product';

const TABLE_NAME = 'Products';
import Database from '../database';

class ProductService {

  // Fetch all products from the database
  static async getAllProducts(): Promise<Product[] | []> {
    let products: Product[] = [];
    const params = { TableName: TABLE_NAME };

    try {
        const db = Database.getInstance();
        const data: Product[] = await db.scan(params);

        if (data) {
            data.forEach((product: IProduct) => {
                products.push(new Product(product))
            });
        }
    } catch (error) {
        console.log("error", error);
    }

    return products;
}

    // Fetch a single product by its ID
    static async getProduct(productId: string): Promise<Product | null> {
        const db = Database.getInstance();

        const params = {
            TableName: TABLE_NAME,
            Key: { product_id: productId },
        };

        try {
            const data = await db.getItem(params);

            if (data) {
                return data;
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }

        return null;
    }
}

export default ProductService;
