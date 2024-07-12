"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListControls = void 0;
const react_1 = require("react");
const ink_1 = require("ink");
const useListControls = (listItems, onReturn, isActive) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = (0, react_1.useState)(0);
    (0, ink_1.useInput)((input, key) => {
        if (input.toLowerCase() === "j" || key.downArrow) {
            const nextIndex = selectedOptionIndex === listItems.length - 1 ? 0 : selectedOptionIndex + 1;
            setSelectedOptionIndex(nextIndex);
            return;
        }
        if (input.toLowerCase() === "k" || key.upArrow) {
            const nextIndex = selectedOptionIndex === 0 ? listItems.length - 1 : selectedOptionIndex - 1;
            setSelectedOptionIndex(nextIndex);
            return;
        }
        if (key.return && onReturn) {
            onReturn(listItems[selectedOptionIndex], selectedOptionIndex);
        }
    }, { isActive });
    return { selectedOptionIndex };
};
exports.useListControls = useListControls;
