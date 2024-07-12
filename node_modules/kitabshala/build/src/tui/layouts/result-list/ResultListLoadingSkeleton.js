"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultListLoadingSkeleton = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const labels_1 = __importDefault(require("../../../labels"));
const constants_1 = require("../../../constants");
function ResultListLoadingSkeleton() {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: constants_1.RESULT_LIST_LENGTH + 2, borderStyle: "round", borderColor: "grey", width: "100%", paddingLeft: 1, paddingRight: 1 },
        react_1.default.createElement(ink_1.Text, { color: "white" },
            react_1.default.createElement(ink_spinner_1.default, { type: "simpleDotsScrolling" })),
        react_1.default.createElement(ink_1.Text, { color: "white" }, labels_1.default.GETTING_RESULTS)));
}
exports.ResultListLoadingSkeleton = ResultListLoadingSkeleton;
