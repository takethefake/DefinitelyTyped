// Type definitions for cloudevents/sdk-javascript 0.3
// Project: https://github.com/cloudevents/sdk-javascript
// Definitions by: Daniel Schulz <https://github.com/takethefake>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'cloudevents-sdk/v03' {
    interface Cloudevent<TData> {
        format(): string;
        toString(): string;
        type(type: string): Cloudevent<TData>;
        getType(): string;
        specversion(version: string): Cloudevent<TData>;
        getSpecversion(): string;
        source(_source: string): Cloudevent<TData>;
        getSource(): string;
        id(_id: string): Cloudevent<TData>;
        getId(): string;
        time(_time: string): Cloudevent<TData>;
        getTime(): string;
        schemaurl(_schemaurl: string): Cloudevent<TData>;
        getSchemaurl(): string;
        contenttype(_contenttype: string): Cloudevent<TData>;
        getContenttype(): string;
        data(_data: TData): Cloudevent<TData>;
        getData(): TData;
        addExtension(key: string, value: any): Cloudevent<TData>;
        getExtensions(): object;
    }
    export function event<TData>(): Cloudevent<TData>;
}
