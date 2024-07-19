import IProduct from '../interfaces/Product';
import Product from '../models/Product';

export default class Database {
    private static _instance: Database;
    myvalue: string;

    private constructor() {
        this.myvalue = "test";
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new Database();
        return this._instance;
    }

    public getAllProducts(): any {
        let products: Array<Product> = [];
        const result = require('../../data/product-db.json');

        result.forEach( (product: IProduct ) => {
            products.push(new Product(product))
        });

        return products;
    }

    public test(): void {
        this.myvalue = "1234";
    }
}

