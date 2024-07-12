"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const UsageInfo = ({ truncate }) => {
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Text, { wrap: truncate ? "truncate" : undefined },
            react_1.default.createElement(ink_1.Text, { color: "yellow" }, "[UP]"),
            " and ",
            react_1.default.createElement(ink_1.Text, { color: "yellow" }, "[DOWN]"),
            " arrow keys to reveal listings, ",
            react_1.default.createElement(ink_1.Text, { color: "yellow" }, "[ENTER]"),
            " to interact")));
};
exports.default = UsageInfo;
