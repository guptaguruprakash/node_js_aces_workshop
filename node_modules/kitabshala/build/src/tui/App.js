"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const index_1 = __importDefault(require("./layouts/index"));
const DownloadIndicator_1 = require("./components/DownloadIndicator");
const ErrorMessage_1 = require("./components/ErrorMessage");
const index_2 = require("./store/index");
const AppHeader_1 = require("./components/AppHeader");
const AppContainer_1 = require("./components/AppContainer");
function App({ doNotFetchConfigInitially }) {
    const { setRawMode } = (0, ink_1.useStdin)();
    const errorMessage = (0, index_2.useBoundStore)((state) => state.errorMessage);
    const warningMessage = (0, index_2.useBoundStore)((state) => state.warningMessage);
    const fetchConfig = (0, index_2.useBoundStore)((state) => state.fetchConfig);
    (0, react_1.useEffect)(() => {
        if (doNotFetchConfigInitially) {
            return;
        }
        fetchConfig();
    }, [doNotFetchConfigInitially, fetchConfig]);
    (0, react_1.useEffect)(() => {
        setRawMode(true);
        return () => {
            setRawMode(false);
        };
    }, [setRawMode]);
    if (errorMessage) {
        return react_1.default.createElement(ErrorMessage_1.ErrorMessage, null);
    }
    return (react_1.default.createElement(AppContainer_1.AppContainer, null,
        react_1.default.createElement(AppHeader_1.AppHeader, null),
        react_1.default.createElement(index_1.default, null),
        react_1.default.createElement(DownloadIndicator_1.DownloadIndicator, null),
        warningMessage && react_1.default.createElement(ink_1.Text, { color: "yellow" },
            "[!] ",
            warningMessage)));
}
exports.App = App;
exports.default = App;
