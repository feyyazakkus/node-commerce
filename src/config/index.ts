const env: string = process.env.NODE_ENV || "dev";

interface IConfig {
    [key: string]: any
  }

const config: IConfig = {
    "dev": {
        dynamoDB: {
            region: "eu-central-1",
            endpoint: 'http://localhost:8000',
        }
    },
    "prod": {
        dynamoDB: {
            region: "eu-central-1"
        }
    }
};

export default config[env];
