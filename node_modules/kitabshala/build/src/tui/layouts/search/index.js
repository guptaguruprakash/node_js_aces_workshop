"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const index_1 = __importDefault(require("./search-input/index"));
const index_2 = require("../../store/index");
const LoadingSpinner_1 = require("../../components/LoadingSpinner");
const index_3 = require("./search-by/index");
const Search = () => {
    const isLoading = (0, index_2.useBoundStore)((state) => state.isLoading);
    const loaderMessage = (0, index_2.useBoundStore)((state) => state.loaderMessage);
    if (isLoading) {
        return react_1.default.createElement(LoadingSpinner_1.LoadingSpinner, { message: loaderMessage });
    }
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(index_1.default, null),
        react_1.default.createElement(index_3.SearchBy, null)));
};
exports.default = Search;
