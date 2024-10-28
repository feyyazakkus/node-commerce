
# Node-Commerce
Node-Commerce is a Node.js-based e-commerce application designed to provide a robust and scalable platform for online shopping. This application is built with modern web technologies and follows best practices to ensure high performance and security.

## Features
- Product catalog with categories
- Shopping cart functionality based on session
- Responsive design for mobile and desktop

## Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/node-commerce.git
```

2. Navigate to the project directory:

```bash
cd node-commerce
```

3. Install the dependencies:

```bash
npm install
```


### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

```dotenv
PORT=3000
NODE_ENV=[development|production]
AWS_REGION=YOUR_AWS_REGION
AWS_ENDPOINT=YOUR_AWS_DB_LOCAL_ENDPOINT
```
Replace the placeholder values with your own configuration settings.


### Running the Application

#### Development

To start the application in development mode, run:

`npm run dev`

The application will be available at [http://localhost:3000](http://localhost:3000).

#### Production

To build and start the application in production mode, run:

`npm run prod:start`

### Scripts

`npm run start`: Starts the application in development mode.
`npm run tsc`: Compiles TypeScript files.
`npm run dev`: Starts the application with ts-node-dev for development.
`npm run prod:build`: Builds the application for production.
`npm run prod:start`: Builds and starts the application using PM2 in production mode.
