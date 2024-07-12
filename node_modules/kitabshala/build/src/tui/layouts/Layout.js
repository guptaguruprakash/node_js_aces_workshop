"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("../store/index");
const Layout = ({ children, layoutName }) => {
    const activeLayout = (0, index_1.useBoundStore)((state) => state.activeLayout);
    return react_1.default.createElement(react_1.default.Fragment, null, activeLayout === layoutName && children);
};
exports.Layout = Layout;
