"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const constants_1 = require("../../../constants");
const ResultListItemOption_1 = __importDefault(require("./ResultListItemOption"));
const ResultListItemEntry_1 = __importDefault(require("./ResultListItemEntry"));
const ListItem_1 = require("../../../api/models/ListItem");
const ContentContainer_1 = __importDefault(require("../../components/ContentContainer"));
const useScrollableListControls_1 = require("../../hooks/useScrollableListControls");
const utils_1 = require("../../../utils");
const UsageInfo_1 = __importDefault(require("../../components/UsageInfo"));
const ResultListInfo_1 = __importDefault(require("../../components/ResultListInfo"));
const index_1 = require("../../store/index");
const ResultListLoadingSkeleton_1 = require("./ResultListLoadingSkeleton");
const ResultList = () => {
    const anyEntryExpanded = (0, index_1.useBoundStore)((state) => state.anyEntryExpanded);
    const activeExpandedListLength = (0, index_1.useBoundStore)((state) => state.activeExpandedListLength);
    const listItems = (0, index_1.useBoundStore)((state) => state.listItems);
    const listItemsCursor = (0, index_1.useBoundStore)((state) => state.listItemsCursor);
    const setListItemsCursor = (0, index_1.useBoundStore)((state) => state.setListItemsCursor);
    const isLoading = (0, index_1.useBoundStore)((state) => state.isLoading);
    (0, useScrollableListControls_1.useScrollableListControls)(listItemsCursor, setListItemsCursor, listItems.length, !anyEntryExpanded);
    const renderedItems = (0, utils_1.getRenderedListItems)(listItemsCursor, listItems, anyEntryExpanded, activeExpandedListLength);
    const activeListIndex = renderedItems.length - 1 < constants_1.RESULT_LIST_ACTIVE_LIST_INDEX ? 1 : constants_1.RESULT_LIST_ACTIVE_LIST_INDEX;
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ResultListInfo_1.default, null),
        isLoading ? (react_1.default.createElement(ResultListLoadingSkeleton_1.ResultListLoadingSkeleton, null)) : (react_1.default.createElement(ContentContainer_1.default, null, renderedItems.map((item, index) => item.type === ListItem_1.IResultListItemType.Option ? (react_1.default.createElement(ResultListItemOption_1.default, { key: item.data.id, item: item, isActive: index === activeListIndex })) : (react_1.default.createElement(ResultListItemEntry_1.default, { key: item.data.id, item: item, isActive: index === activeListIndex, isExpanded: index === constants_1.RESULT_LIST_ACTIVE_LIST_INDEX && anyEntryExpanded, isFadedOut: index !== constants_1.RESULT_LIST_ACTIVE_LIST_INDEX && anyEntryExpanded }))))),
        react_1.default.createElement(UsageInfo_1.default, null)));
};
exports.default = ResultList;
