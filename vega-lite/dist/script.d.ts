interface DataPoint {
    category: string;
    value: number;
}
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
declare let container: HTMLElement | null;
