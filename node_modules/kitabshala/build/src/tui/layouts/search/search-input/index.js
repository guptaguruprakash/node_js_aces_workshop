"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const SearchInfo_1 = __importDefault(require("./SearchInfo"));
const SearchWarning_1 = __importDefault(require("./SearchWarning"));
const SearchInput_1 = __importDefault(require("./SearchInput"));
const SearchInputMain = () => {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(SearchInfo_1.default, null),
        react_1.default.createElement(SearchWarning_1.default, null),
        react_1.default.createElement(SearchInput_1.default, null)));
};
exports.default = SearchInputMain;
