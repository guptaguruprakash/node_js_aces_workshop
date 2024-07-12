"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const constants_1 = require("../../../../constants");
const index_1 = require("../../../store/index");
const SearchWarning = () => {
    const showSearchMinCharWarning = (0, index_1.useBoundStore)((state) => state.showSearchMinCharWarning);
    if (!showSearchMinCharWarning) {
        return null;
    }
    return (react_1.default.createElement(ink_1.Text, { color: "yellow", wrap: "truncate" },
        "Search string must contain minimum ",
        constants_1.SEARCH_MIN_CHAR,
        " characters."));
};
exports.default = SearchWarning;
