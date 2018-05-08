const { createEngine, cleanReport } = require("./utils");

const engine = createEngine({
    configFile: require.resolve("../base.js"),
});

test("should report missing trailing slash", () => {
    const report = engine.executeOnFiles(["missing-trailing-slash.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
