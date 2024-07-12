"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_text_input_1 = __importDefault(require("ink-text-input"));
const Input = ({ label, placeholder, isFocused, searchValue, onSearchValueChange, onSubmit }) => {
    const handleOnChange = (val) => {
        if (isFocused) {
            onSearchValueChange(val);
        }
    };
    const handleOnSubmit = () => {
        if (isFocused && onSubmit) {
            onSubmit();
        }
    };
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Box, { marginRight: 1 },
            react_1.default.createElement(ink_1.Text, null, "?"),
            react_1.default.createElement(ink_1.Box, { marginLeft: 1 },
                react_1.default.createElement(ink_1.Text, { color: "yellowBright", inverse: isFocused, wrap: "truncate" },
                    label,
                    ":"))),
        react_1.default.createElement(ink_1.Text, { wrap: "truncate" },
            react_1.default.createElement(ink_text_input_1.default, { value: searchValue, onChange: handleOnChange, showCursor: isFocused, placeholder: placeholder, onSubmit: handleOnSubmit }))));
};
exports.default = Input;
