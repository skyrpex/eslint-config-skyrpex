const { createEngine, cleanReport } = require("./utils");

test("should validate SFC without errors", () => {
    const engine = createEngine({
        configFile: require.resolve("../vue.js"),
    });

    const report = engine.executeOnFiles(["component.fixture.vue"]);

    expect(cleanReport(report)).toMatchSnapshot();
});

test("should validate JSX without errors", () => {
    const engine = createEngine({
        configFile: require.resolve("../vue.js"),
    });

    const report = engine.executeOnFiles(["component.fixture.jsx"]);

    expect(cleanReport(report)).toMatchSnapshot();
});

test("should report buble-related errors", () => {
    const engine = createEngine({
        configFile: require.resolve("./vue-buble.eslint.config.js"),
    });

    const report = engine.executeOnFiles(["component.fixture.vue"]);

    expect(cleanReport(report)).toMatchSnapshot();
});
