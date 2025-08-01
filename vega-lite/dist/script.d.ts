interface DataPoint {
    category: string;
    value: number;
}
declare const createDivRenderSpec: (divId: string, spec: any) => void;
declare const spec: {
    $schema: string;
    description: string;
    data: {
        values: {
            category: string;
            value: number;
        }[];
    };
    mark: string;
    encoding: {
        x: {
            field: string;
            type: string;
            axis: {
                labelAngle: number;
            };
        };
        y: {
            field: string;
            type: string;
        };
    };
};
declare const seattleWeather: {
    data: {
        url: string;
    };
    mark: string;
    encoding: {
        x: {
            timeUnit: string;
            field: string;
            type: string;
            title: string;
        };
        y: {
            aggregate: string;
            type: string;
        };
        color: {
            field: string;
            type: string;
            scale: {
                domain: string[];
                range: string[];
            };
            title: string;
        };
    };
};
declare const seattleWeatherOverTime: {
    data: {
        url: string;
    };
    mark: string;
    encoding: {
        x: {
            timeUnit: string;
            field: string;
            type: string;
            title: string;
        };
        y: {
            aggregate: string;
            type: string;
        };
        color: {
            field: string;
            type: string;
            scale: {
                domain: string[];
                range: string[];
            };
            title: string;
        };
    };
};
declare function readFileSyncNoLibs(path: string): any;
declare function csvToJson(csv: string): any[];
declare const renderMyStuff: () => Promise<void>;
