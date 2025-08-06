
module.exports = {
    apps : [
        {
            name: "NodeCommerce",
            script: "./dist/app.js",
            watch: true,
            env_development: {
                "PORT": "3000",
                "NODE_ENV": "development",
                "AWS_REGION": "eu-central-1",
                "AWS_ENDPOINT": "http://localhost:8000"
            },
            env_production: {
                "PORT": "80",
                "NODE_ENV": "production",
                "AWS_REGION": "eu-central-1"
            }
        }
    ]
};
