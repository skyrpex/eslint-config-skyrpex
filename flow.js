module.exports = {
    extends: ["./base.js"],
    plugins: ["flowtype-errors"],
    parser: require.resolve("vue-eslint-parser"),
    parserOptions: {
        parser: require.resolve("babel-eslint"),
    },
    rules: {
        "flowtype-errors/show-errors": 2,
    },
};
