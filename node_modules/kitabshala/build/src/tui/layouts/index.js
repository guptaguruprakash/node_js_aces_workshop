"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_1 = require("./Layout");
const keys_1 = require("./keys");
const index_1 = __importDefault(require("./search/index"));
const index_2 = __importDefault(require("./result-list/index"));
const ResultListContext_1 = require("../contexts/ResultListContext");
const index_3 = __importDefault(require("./detail/index"));
const index_4 = require("./bulk-download/index");
const index_5 = require("./bulk-download-before-exit/index");
const index_6 = require("./download-queue-before-exit/index");
const Layouts = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.SEARCH_LAYOUT },
            react_1.default.createElement(index_1.default, null)),
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.RESULT_LIST_LAYOUT },
            react_1.default.createElement(ResultListContext_1.ResultListContextProvider, null,
                react_1.default.createElement(index_2.default, null))),
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.DETAIL_LAYOUT },
            react_1.default.createElement(index_3.default, null)),
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.BULK_DOWNLOAD_LAYOUT },
            react_1.default.createElement(index_4.BulkDownload, null)),
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.BULK_DOWNLOAD_BEFORE_EXIT_LAYOUT },
            react_1.default.createElement(index_5.BulkDownloadBeforeExit, null)),
        react_1.default.createElement(Layout_1.Layout, { layoutName: keys_1.LAYOUT_KEY.DOWNLOAD_QUEUE_BEFORE_EXIT_LAYOUT },
            react_1.default.createElement(index_6.DownloadQueueBeforeExit, null))));
};
exports.default = Layouts;
