module.exports = {
    extends: ["./base.js"],
    plugins: ["flow-check"],
    parser: require.resolve("vue-eslint-parser"),
    parserOptions: {
        parser: require.resolve("babel-eslint"),
    },
    rules: {
        "flow-check/check": 2,
    },
};
