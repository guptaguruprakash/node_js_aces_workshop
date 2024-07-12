"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const Spinner = () => {
    return (react_1.default.createElement(ink_1.Text, { color: "cyanBright" },
        react_1.default.createElement(ink_spinner_1.default, { type: "dots" })));
};
exports.default = Spinner;
