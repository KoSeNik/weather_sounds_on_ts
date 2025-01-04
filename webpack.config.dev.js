const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "ts", "jsx", "tsx"],
      fix: true,
      cache: true,
      cacheLocation: "node_modules/.cache/eslint-webpack-plugin/.eslintcache",
      cacheStrategy: "metadata",
      context: "./src",
      emitWarning: true,
      emitError: true,
      failOnWarning: false,
      failOnError: true,
      formatter: "table",
      lintDirtyModulesOnly: false,
    }),
  ],
});
