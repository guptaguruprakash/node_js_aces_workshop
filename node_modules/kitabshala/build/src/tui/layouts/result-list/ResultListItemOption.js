"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const figures_1 = __importDefault(require("figures"));
const index_1 = require("../../store/index");
const ResultListItemOption = ({ item, isActive }) => {
    const anyEntryExpanded = (0, index_1.useBoundStore)((state) => state.anyEntryExpanded);
    (0, ink_1.useInput)((_, key) => {
        if (key.return) {
            item.data.onSelect();
        }
    }, { isActive });
    return (react_1.default.createElement(ink_1.Text, { wrap: "truncate", color: anyEntryExpanded ? "gray" : isActive ? "cyanBright" : "yellow", bold: isActive },
        isActive ? figures_1.default.pointer : " ",
        " ",
        item.data.label));
};
exports.default = ResultListItemOption;
