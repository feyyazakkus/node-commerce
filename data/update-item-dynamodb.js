const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { UpdateCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({endpoint: "http://localhost:8000"});
const docClient = DynamoDBDocumentClient.from(client);

const main = async () => {

    const command = new UpdateCommand({
        TableName: "Products",
        Key: {
          product_id: "9",
        },
        UpdateExpression: "set image_url = :image_url",
        ExpressionAttributeValues: {
          ":image_url": "images/product-19.jpg",
        },
        ReturnValues: "ALL_NEW",
      });

    await docClient.send(command);
};

main();
