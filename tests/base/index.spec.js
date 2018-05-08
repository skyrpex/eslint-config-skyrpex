const { CLIEngine } = require("eslint");
const { cleanReport } = require("../utils");

const cwd = `${__dirname}/fixtures`;

const engine = new CLIEngine({
    cwd,
    configFile: require.resolve("./eslint.config.js"),
    useEslintrc: false,
    ignore: false,
});

test("should report missing trailing slash", () => {
    const report = engine.executeOnFiles(["missing-trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
