const path = require('path');

const app = {
    target: "web",
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    devtool: "source-map"
};

module.exports = app;