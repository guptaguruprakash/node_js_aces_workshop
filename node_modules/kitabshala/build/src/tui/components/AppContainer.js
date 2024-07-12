"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const settings_1 = require("../../settings");
const useStdoutDimensions_1 = require("../hooks/useStdoutDimensions");
function AppContainer({ children }) {
    const [cols] = (0, useStdoutDimensions_1.useStdoutDimensions)();
    const width = cols - settings_1.SCREEN_PADDING > settings_1.SCREEN_BASE_APP_WIDTH ? settings_1.SCREEN_BASE_APP_WIDTH : `${settings_1.SCREEN_WIDTH_PERC}%`;
    return (react_1.default.createElement(ink_1.Box, { width: width, marginLeft: 1, paddingRight: 4, flexDirection: "column" }, children));
}
exports.AppContainer = AppContainer;
