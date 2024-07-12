"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByItem = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const figures_1 = __importDefault(require("figures"));
function SearchByItem({ isSelected, label, onSelect }) {
    const { isFocused } = (0, ink_1.useFocus)();
    (0, ink_1.useInput)((_, key) => {
        if (key.return) {
            onSelect();
        }
    }, { isActive: isFocused });
    return (react_1.default.createElement(ink_1.Text, { color: isSelected ? "green" : "white" },
        " ",
        isSelected ? figures_1.default.tick : " ",
        " ",
        react_1.default.createElement(ink_1.Text, { inverse: isFocused }, label),
        isFocused && !isSelected ? react_1.default.createElement(ink_1.Text, { color: "gray" }, " (Press [ENTER] to select)") : ""));
}
exports.SearchByItem = SearchByItem;
