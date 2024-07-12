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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultListContextProvider = exports.useResultListContext = exports.ResultListContext = void 0;
const react_1 = __importStar(require("react"));
const keys_1 = require("../layouts/keys");
const index_1 = require("../store/index");
exports.ResultListContext = react_1.default.createContext(undefined);
const useResultListContext = () => {
    const context = (0, react_1.useContext)(exports.ResultListContext);
    if (!context) {
        throw new Error("useResultListContext must be used within a ResultListContextProvider");
    }
    return context;
};
exports.useResultListContext = useResultListContext;
const ResultListContextProvider = ({ children, }) => {
    const setDetailedEntry = (0, index_1.useBoundStore)((state) => state.setDetailedEntry);
    const setAnyEntryExpanded = (0, index_1.useBoundStore)((state) => state.setAnyEntryExpanded);
    const setActiveLayout = (0, index_1.useBoundStore)((state) => state.setActiveLayout);
    const handleSeeDetailsOptions = (0, react_1.useCallback)((entry) => {
        setDetailedEntry(entry);
        setActiveLayout(keys_1.LAYOUT_KEY.DETAIL_LAYOUT);
    }, [setDetailedEntry, setActiveLayout]);
    const handleTurnBackToTheListOption = (0, react_1.useCallback)(() => {
        setAnyEntryExpanded(false);
    }, [setAnyEntryExpanded]);
    const handleDetailTurnBackToTheList = (0, react_1.useCallback)(() => {
        setActiveLayout(keys_1.LAYOUT_KEY.RESULT_LIST_LAYOUT);
        setDetailedEntry(null);
    }, [setDetailedEntry, setActiveLayout]);
    return (react_1.default.createElement(exports.ResultListContext.Provider, { value: {
            handleSeeDetailsOptions,
            handleTurnBackToTheListOption,
            handleDetailTurnBackToTheList,
        } }, children));
};
exports.ResultListContextProvider = ResultListContextProvider;
