const { tabWidth } = require("./constants");

module.exports = {
    extends: ["./base.js", "plugin:vue/recommended"],
    plugins: ["vue"],
    parserOptions: {
        parser: require.resolve("babel-eslint"),
    },
    rules: {
        "vue/html-closing-bracket-newline": [
            "error",
            {
                multiline: "always",
            },
        ],
        "vue/html-indent": [
            "error",
            tabWidth,
            {
                closeBracket: 0,
            },
        ],
        "vue/html-closing-bracket-spacing": "error",
    },
};
