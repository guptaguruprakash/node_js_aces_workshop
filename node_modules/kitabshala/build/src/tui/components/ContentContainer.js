"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ContentContainer = ({ children }) => {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", borderStyle: "round", borderColor: "grey", width: "100%", paddingLeft: 1, paddingRight: 1 }, children));
};
exports.default = ContentContainer;
