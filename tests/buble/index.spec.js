const { createEngine, cleanReport } = require("../utils");

const engine = createEngine({
    configFile: require.resolve("./eslint.config.js"),
});

test("should report trailing slash", () => {
    const report = engine.executeOnFiles(["trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
