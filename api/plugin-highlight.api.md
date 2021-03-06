## API Report File for "@edtr-io/plugin-highlight"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { EditorPlugin } from '@edtr-io/plugin';
import { EditorPluginProps } from '@edtr-io/plugin';
import * as React from 'react';

// @public (undocumented)
export function createHighlightPlugin(config?: HighlightConfig): EditorPlugin<HighlightState, HighlightConfig>;

// @public (undocumented)
export interface HighlightConfig {
    // (undocumented)
    Renderer: React.ComponentType<HighlightRendererProps>;
}

// @public (undocumented)
export type HighlightProps = EditorPluginProps<HighlightState, HighlightConfig>;

// @public (undocumented)
export interface HighlightRendererProps {
    // (undocumented)
    code: string;
    // (undocumented)
    language: string;
    // (undocumented)
    showLineNumbers: boolean;
}

// @public (undocumented)
export type HighlightState = typeof highlightState;

// @public (undocumented)
export const highlightState: import("@edtr-io/internal__plugin-state").StateType<import("@edtr-io/internal__plugin-state").StateTypesSerializedType<{
    code: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    language: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    showLineNumbers: import("@edtr-io/internal__plugin-state").StateType<boolean, boolean, {
        value: boolean;
        get(): boolean;
        set(value: boolean | ((currentValue: boolean) => boolean)): void;
    }>;
}>, import("@edtr-io/internal__plugin-state").StateTypesValueType<{
    code: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    language: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    showLineNumbers: import("@edtr-io/internal__plugin-state").StateType<boolean, boolean, {
        value: boolean;
        get(): boolean;
        set(value: boolean | ((currentValue: boolean) => boolean)): void;
    }>;
}>, import("@edtr-io/internal__plugin-state").StateTypesReturnType<{
    code: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    language: import("@edtr-io/internal__plugin-state").StateType<string, string, {
        value: string;
        get(): string;
        set(value: string | ((currentValue: string) => string)): void;
    }>;
    showLineNumbers: import("@edtr-io/internal__plugin-state").StateType<boolean, boolean, {
        value: boolean;
        get(): boolean;
        set(value: boolean | ((currentValue: boolean) => boolean)): void;
    }>;
}>>;


// (No @packageDocumentation comment for this package)

```
