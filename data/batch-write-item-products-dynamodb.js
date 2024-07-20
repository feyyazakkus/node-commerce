const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { BatchWriteCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({endpoint: "http://localhost:8000"});
const docClient = DynamoDBDocumentClient.from(client);

const main = async () => {
    const products = require('./product-db.json');

    const putRequests = products.map((product) => ({
        PutRequest: {
            Item: product,
        },
    }));

    const command = new BatchWriteCommand({
      RequestItems: {
        // An existing table is required
        ["Products"]: putRequests,
      },
    });

    await docClient.send(command);
};

main();
