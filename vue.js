module.exports = {
    extends: ["./base.js", "plugin:vue/recommended"],
    plugins: ["vue"],
    parserOptions: {
        parser: "babel-eslint",
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
            4,
            {
                closeBracket: 0,
            },
        ],
        "vue/html-closing-bracket-spacing": "error",
    },
};
