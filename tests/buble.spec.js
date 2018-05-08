const { createEngine, cleanReport } = require("./utils");

const engine = createEngine({
    configFile: require.resolve("../buble.js"),
});

test("should report trailing slash", () => {
    const report = engine.executeOnFiles(["trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
