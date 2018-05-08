const { CLIEngine } = require("eslint");
const { cleanReport } = require("../utils");

const cwd = `${__dirname}/fixtures`;

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
