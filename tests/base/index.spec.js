const path = require("path");
const { CLIEngine } = require("eslint");

const cwd = `${__dirname}/fixtures`;

const engine = new CLIEngine({
    cwd,
    configFile: require.resolve("./eslint.config.js"),
    useEslintrc: false,
    ignore: false,
});

const cleanReport = ({ results, ...report }) => ({
    ...report,
    results: results.map(({ filePath, ...result }) => ({
        ...result,
        filePath: path.relative(cwd, filePath),
    })),
});

test("should report missing trailing slash", () => {
    const report = engine.executeOnFiles(["missing-trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
