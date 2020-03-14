const PROXY_CONFIG = [
    {
        context: [
            "/random-meal",
        ],
        target: "https://www.themealdb.com/api/json/v1/1",
        secure: false,
        pathRewrite: {
            "^/random-meal": "/random.php",
        },
        changeOrigin: true,
    }
]

module.exports = PROXY_CONFIG;