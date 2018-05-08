const { createEngine, cleanReport } = require("../utils");

const engine = createEngine({
    configFile: require.resolve("./eslint.config.js"),
});

test("should report incompatible type error", () => {
    const report = engine.executeOnFiles(["incompatible-type.fixture.js"]);
    expect(cleanReport(report)).toMatchSnapshot();
});
