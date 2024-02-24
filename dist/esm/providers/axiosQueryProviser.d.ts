import { AxiosRequestHeaders } from "axios";
import React from "react";
export type axiosQueryConfig = {
    headers: AxiosRequestHeaders | undefined;
    baseUrl: string;
};
export declare const AxiosQueryContext: React.Context<{
    config: axiosQueryConfig;
}>;
export declare const AxiosQueryProvider: ({ config, children, }: {
    children: JSX.Element;
    config: axiosQueryConfig;
}) => React.JSX.Element;
