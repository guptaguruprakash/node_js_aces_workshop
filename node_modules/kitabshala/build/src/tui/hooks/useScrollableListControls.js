"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollableListControls = void 0;
const ink_1 = require("ink");
const useScrollableListControls = (cursorIndex, setCursorIndex, listLength, isActive) => {
    (0, ink_1.useInput)((input, key) => {
        if (input.toLowerCase() === "j" || key.downArrow) {
            setCursorIndex((cursorIndex + 1) % listLength);
            return;
        }
        if (input.toLowerCase() === "k" || key.upArrow) {
            setCursorIndex((cursorIndex - 1 + listLength) % listLength);
            return;
        }
    }, {
        isActive,
    });
};
exports.useScrollableListControls = useScrollableListControls;
