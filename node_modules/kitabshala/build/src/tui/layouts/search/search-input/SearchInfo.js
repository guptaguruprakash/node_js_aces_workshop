"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const SearchInfo = () => {
    return (react_1.default.createElement(ink_1.Text, { wrap: "truncate-end" },
        react_1.default.createElement(ink_1.Text, { color: "yellowBright" }, "[TAB]"),
        " to switch between ",
        "'",
        "Search Input",
        "'",
        " and ",
        "'",
        "Search by",
        "'",
        ",",
        react_1.default.createElement(ink_1.Text, { color: "yellowBright" }, " [ENTER]"),
        " to Search"));
};
exports.default = SearchInfo;
