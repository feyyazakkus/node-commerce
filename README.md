
# Node-Commerce
Node-Commerce is a Node.js-based e-commerce application designed to provide a robust and scalable platform for online shopping. This application is built with modern web technologies and follows best practices to ensure high performance and security.

<img src="https://github.com/user-attachments/assets/d8267e88-f736-480f-a3f2-8a11fde42ab5" width="500" alt="NodeCommerce">

## Features
- Product catalog with categories
- Shopping cart functionality based on session
- Responsive design for mobile and desktop

## Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- DynamoDB local database

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/node-commerce.git
```

2. Navigate to the project directory:

```
cd node-commerce
```

3. Install the dependencies:

```
npm install
```


### Configuration

#### AWS DynamoDB

1. Download & Install DynamoDB local database following by this document https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html

2. Start the database:

```
cd dynamodb_local_latest
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

3. Create `Products`  table:

```
aws dynamodb create-table --cli-input-json file://data/product-table-definition.json --endpoint-url http://localhost:8000
```

4. Verify that the table is created:

```
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

5. Run the following script to import products.json into Products table:

```
node batch-write-item-products-dynamodb.js
```

#### .env file

1. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
NODE_ENV=[development|production]
AWS_REGION=YOUR_AWS_REGION
AWS_ENDPOINT=YOUR_AWS_DB_LOCAL_ENDPOINT (http://localhost:8000)
```
2. Replace the placeholder values with your own configuration settings.


### Running the Application

#### Development
To start the application in development mode, run:

```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

#### Production
To build and start the application in production mode, run:

```
npm run prod:build
npm run prod:start
```

### Scripts

- `npm start`: Shortcut to start the application in development mode.
- `npm run tsc`: Compiles TypeScript files.
- `npm run dev`: Starts the application for development mode.
- `npm run prod:build`: Builds the application for production.
- `npm run prod:start`: Builds and starts the application using PM2 in production mode.
