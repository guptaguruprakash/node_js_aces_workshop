"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSpinner = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const SpinnerText_1 = __importDefault(require("./SpinnerText"));
function LoadingSpinner({ message }) {
    return (react_1.default.createElement(SpinnerText_1.default, null,
        react_1.default.createElement(ink_1.Text, null, message)));
}
exports.LoadingSpinner = LoadingSpinner;
