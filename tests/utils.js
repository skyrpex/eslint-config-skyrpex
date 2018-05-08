const path = require("path");

module.exports.cleanReport = ({ results, ...report }) => ({
    ...report,
    results: results.map(({ filePath, ...result }) => ({
        ...result,
        filePath: path.relative(process.cwd(), filePath),
    })),
});
