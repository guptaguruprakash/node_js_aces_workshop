"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Spinner_1 = __importDefault(require("./Spinner"));
const SpinnerText = ({ children }) => {
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Box, { marginRight: 1 },
            react_1.default.createElement(Spinner_1.default, null)),
        children));
};
exports.default = SpinnerText;
