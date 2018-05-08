const { tabWidth } = require("./constants");

module.exports = {
    extends: ["./base.js"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth,
                trailingComma: "es5",
            },
        ],
    },
};
