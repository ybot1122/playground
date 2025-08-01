"use strict";
const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A simple bar chart with embedded data.",
    data: {
        values: [
            { category: "A", value: 28 },
            { category: "B", value: 55 },
            { category: "C", value: 43 },
            { category: "D", value: 91 },
            { category: "E", value: 81 },
            { category: "F", value: 53 },
            { category: "G", value: 19 },
            { category: "H", value: 87 },
        ],
    },
    mark: "bar",
    encoding: {
        x: { field: "category", type: "ordinal", axis: { labelAngle: 0 } },
        y: { field: "value", type: "quantitative" },
    },
};
// Create a container div if it doesn't exist
let container = document.getElementById("vis");
if (!container) {
    container = document.createElement("div");
    container.id = "vis";
    document.body.appendChild(container);
}
// Use the globally available vegaEmbed function
// @ts-ignore
vegaEmbed("#vis", spec);
//# sourceMappingURL=script.js.map