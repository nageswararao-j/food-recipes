const PROXY_CONFIG = [
    {
        context: [
            "/random-meal",
            "/meal",
        ],
        target: "https://www.themealdb.com/api/json/v1/1",
        secure: false,
        pathRewrite: {
            "^/random-meal": "/random.php",
            "^/meal": "/search.php",
        },
        changeOrigin: true,
        logLevel: "debug",
    }
]

module.exports = PROXY_CONFIG;