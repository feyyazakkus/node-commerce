import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, ScanCommandInput, GetCommand, GetCommandInput } from "@aws-sdk/lib-dynamodb";

import IProduct from '../interfaces/Product';
import Product from '../models/Product';
import config from '../config';

export default class Database {
    private static instance: Database;
    private client: DynamoDBClient;
    public docClient: DynamoDBDocumentClient;

    private constructor() {
        // initialize  DynamoDB client
        this.client = new DynamoDBClient(config.dynamoDB)
        this.docClient = DynamoDBDocumentClient.from(this.client);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
            return this.instance;
        }

        return this.instance;
    }

    public async scan(params: ScanCommandInput): Promise<any> {
        const command = new ScanCommand(params);

        try {
            const response = await this.docClient.send(command);

            if (response && response.Items) {
                return response.Items;
            }
        } catch (e) {
            return null;
        }

        return null;
    }

    public async getItem(params: GetCommandInput): Promise<any> {
        const command = new GetCommand(params);

        try {
            const response = await this.docClient.send(command);

            if (response && response.Item) {
                return response.Item;
            }
        } catch (e) {
            return null;
        }

        return null;
    }
}

