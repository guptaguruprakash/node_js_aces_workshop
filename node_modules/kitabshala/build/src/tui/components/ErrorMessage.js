"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const OptionList_1 = __importDefault(require("./OptionList"));
const index_1 = require("../store/index");
const labels_1 = __importDefault(require("../../labels"));
const options_1 = require("../../options");
function ErrorMessage() {
    const errorMessage = (0, index_1.useBoundStore)((state) => state.errorMessage);
    const handleExit = (0, index_1.useBoundStore)((state) => state.handleExit);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, null,
                "Something went wrong:",
                react_1.default.createElement(ink_1.Text, null,
                    " ",
                    errorMessage))),
        react_1.default.createElement(OptionList_1.default, { options: {
                [options_1.ErrorMessageOption.EXIT]: {
                    label: labels_1.default.EXIT,
                    onSelect: () => handleExit(),
                },
            } })));
}
exports.ErrorMessage = ErrorMessage;
