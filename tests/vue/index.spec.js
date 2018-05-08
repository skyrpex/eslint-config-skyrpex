const { createEngine, cleanReport } = require("../utils");

test("should validate without errors", () => {
    const engine = createEngine({
        configFile: require.resolve("./eslint.config.js"),
    });

    const report = engine.executeOnFiles(["component.fixture.vue"]);

    expect(cleanReport(report)).toMatchSnapshot();
});

test("should report buble-related errors", () => {
    const engine = createEngine({
        configFile: require.resolve("./eslint-buble.config.js"),
    });

    const report = engine.executeOnFiles(["component.fixture.vue"]);

    expect(cleanReport(report)).toMatchSnapshot();
});
