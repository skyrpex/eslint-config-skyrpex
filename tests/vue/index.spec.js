const path = require("path");
const { CLIEngine } = require("eslint");

const cwd = `${__dirname}/fixtures`;

const cleanReport = ({ results, ...report }) => ({
    ...report,
    results: results.map(({ filePath, ...result }) => ({
        ...result,
        filePath: path.relative(cwd, filePath),
    })),
});

test("should validate without errors", () => {
    const engine = new CLIEngine({
        cwd,
        configFile: require.resolve("./eslint.config.js"),
        useEslintrc: false,
        ignore: false,
    });
    const report = engine.executeOnFiles(["component.fixture.vue"]);
    expect(cleanReport(report)).toMatchSnapshot();
});

test("should report buble-related errors", () => {
    const engine = new CLIEngine({
        cwd,
        configFile: require.resolve("./eslint-buble.config.js"),
        useEslintrc: false,
        ignore: false,
    });
    const report = engine.executeOnFiles(["component.fixture.vue"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
