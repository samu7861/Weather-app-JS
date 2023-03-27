const path = require("path")

module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
};