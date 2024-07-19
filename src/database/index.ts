import Product from '../interfaces/Product';

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

    public getAllProducts(): Product[] {
        return require('../../data/product-db.json');
    }

    public test(): void {
        this.myvalue = "1234";
    }
}

