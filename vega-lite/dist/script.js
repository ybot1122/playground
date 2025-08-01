"use strict";
const createDivRenderSpec = (divId, spec) => {
    // Create a container div if it doesn't exist
    let container = document.getElementById(`#${divId}`);
    if (!container) {
        container = document.createElement("div");
        container.id = divId;
        document.body.appendChild(container);
    }
    // @ts-ignore
    vegaEmbed(`#${divId}`, spec);
};
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
createDivRenderSpec("vis", spec);
const seattleWeather = {
    data: { url: "data/seattle-weather.csv" },
    mark: "bar",
    encoding: {
        x: {
            timeUnit: "month",
            field: "date",
            type: "ordinal",
            title: "Month of the year",
        },
        y: {
            aggregate: "count",
            type: "quantitative",
        },
        color: {
            field: "weather",
            type: "nominal",
            scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
            },
            title: "Weather type",
        },
    },
};
createDivRenderSpec("seaweather", seattleWeather);
const seattleWeatherOverTime = {
    data: { url: "data/seattle-weather.csv" },
    mark: "bar",
    encoding: {
        x: {
            timeUnit: "week",
            field: "date",
            type: "ordinal",
            title: "Day of the year",
        },
        y: {
            aggregate: "count",
            type: "quantitative",
        },
        color: {
            field: "weather",
            type: "nominal",
            scale: {
                domain: ["sun", "fog", "drizzle", "rain", "snow"],
                range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
            },
            title: "Weather type",
        },
    },
};
function readFileSyncNoLibs(path) {
    // Fetch data/seattle-weather.csv and convert to JSON
    // This function returns a Promise that resolves to the parsed JSON array
    return fetch(path)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
        }
        return response.text();
    })
        .then((csv) => csvToJson(csv));
}
function csvToJson(csv) {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",");
    return lines.slice(1).map((line) => {
        const values = line.split(",");
        const obj = {};
        headers.forEach((header, i) => {
            let value = values[i];
            // Try to convert to number if possible
            if (!isNaN(Number(value)) && value !== "") {
                value = Number(value);
            }
            obj[header] = value;
        });
        return obj;
    });
}
createDivRenderSpec("seaweathertime", seattleWeatherOverTime);
const renderMyStuff = async () => {
    const seattleWeatherJson = await readFileSyncNoLibs("data/seattle-weather.csv");
    const weeks = {};
    let curr_week = 0;
    seattleWeatherJson.map((d, ind) => {
        if (ind % 7 === 0) {
            curr_week = ind / 7;
            weeks[curr_week] = {};
        }
        if (!weeks[curr_week][d.weather]) {
            weeks[curr_week][d.weather] = 0;
        }
        weeks[curr_week][d.weather] += 1;
    });
    console.log(weeks);
};
renderMyStuff();
//# sourceMappingURL=script.js.map