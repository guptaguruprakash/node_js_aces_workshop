"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const keys_1 = require("./layouts/keys");
const App_1 = __importDefault(require("./App"));
const index_1 = require("./store/index");
function renderTUI({ startInCLIMode, doNotFetchConfigInitially, initialLayout, }) {
    if (startInCLIMode) {
        const store = index_1.useBoundStore.getState();
        store.setCLIMode(true);
    }
    const store = index_1.useBoundStore.getState();
    store.setActiveLayout(initialLayout || keys_1.LAYOUT_KEY.SEARCH_LAYOUT);
    (0, ink_1.render)(react_1.default.createElement(App_1.default, { doNotFetchConfigInitially: doNotFetchConfigInitially }));
}
exports.default = renderTUI;
