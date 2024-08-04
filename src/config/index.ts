// config variables
const config = {
    dynamoDB: {
        region: process.env.AWS_REGION,
        endpoint: process.env.AWS_ENDPOINT || null
    }
}

export default config;
