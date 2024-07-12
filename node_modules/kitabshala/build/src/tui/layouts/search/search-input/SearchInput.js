"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("../../../components/Input"));
const constants_1 = require("../../../../constants");
const index_1 = require("../../../store/index");
const ink_1 = require("ink");
const SearchInput = () => {
    const searchValue = (0, index_1.useBoundStore)((state) => state.searchValue);
    const setSearchValue = (0, index_1.useBoundStore)((state) => state.setSearchValue);
    const handleSearchSubmit = (0, index_1.useBoundStore)((state) => state.handleSearchSubmit);
    const { isFocused } = (0, ink_1.useFocus)({ autoFocus: true });
    const handleInputOnSubmit = () => {
        if (!isFocused) {
            return;
        }
        handleSearchSubmit();
    };
    return (react_1.default.createElement(Input_1.default, { label: "Search", placeholder: `Search string must contain minimum ${constants_1.SEARCH_MIN_CHAR} characters.`, isFocused: isFocused, searchValue: searchValue, onSearchValueChange: setSearchValue, onSubmit: handleInputOnSubmit }));
};
exports.default = SearchInput;
