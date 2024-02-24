"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosQueryProvider = exports.AxiosQueryContext = void 0;
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
exports.AxiosQueryContext = (0, react_1.createContext)({
    config: { headers: undefined, baseUrl: "" },
});
var AxiosQueryProvider = function (_a) {
    var config = _a.config, children = _a.children;
    return (react_2.default.createElement(exports.AxiosQueryContext.Provider, { value: { config: config } }, children));
};
exports.AxiosQueryProvider = AxiosQueryProvider;
//# sourceMappingURL=axiosQueryProviser.js.map