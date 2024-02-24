import { createContext } from "react";
import React from "react";
export var AxiosQueryContext = createContext({
    config: { headers: undefined, baseUrl: "" },
});
export var AxiosQueryProvider = function (_a) {
    var config = _a.config, children = _a.children;
    return (React.createElement(AxiosQueryContext.Provider, { value: { config: config } }, children));
};
//# sourceMappingURL=axiosQueryProviser.js.map