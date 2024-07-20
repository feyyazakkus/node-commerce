import IProduct from '../interfaces/Product';
import Product from '../models/Product';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import config from '../config';

export default class Database {
    private static _instance: Database;
    private client: DynamoDBClient;
    public docClient: DynamoDBDocumentClient;

    private constructor() {
        // initialize  DynamoDB client
        this.client = new DynamoDBClient(config.dynamoDB)
        this.docClient = DynamoDBDocumentClient.from(this.client);
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new Database();

        return this._instance;
    }

    public async getAllProducts(): Promise<Product[]|[]> {
        let products: Product[] = [];

        const command = new ScanCommand({ TableName: "Products" });

        try {
            const response = await this.docClient.send(command);

            if (response && response.Items) {
                response.Items.forEach((product: any ) => {
                    products.push(new Product(product))
                });
            }
        } catch (error) {
            console.log("error", error)
        }

        return products;
    }

}

