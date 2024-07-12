"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearScreen = void 0;
const clearScreen = () => {
    const clearANSI = process.platform === "win32" ? "u001b[H\u001bc" : "\u001b[2J";
    // reset screen pos
    process.stdout.write("\u001b[1;1H");
    // clear screen
    process.stdout.write(clearANSI);
};
exports.clearScreen = clearScreen;
