"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ContentContainer_1 = __importDefault(require("../../components/ContentContainer"));
const DetailRow_1 = __importDefault(require("./DetailRow"));
const DetailEntryOptions_1 = __importDefault(require("./DetailEntryOptions"));
const UsageInfo_1 = __importDefault(require("../../components/UsageInfo"));
const index_1 = require("../../store/index");
const ResultListInfo_1 = __importDefault(require("../../components/ResultListInfo"));
const DownloadStatusAndProgress_1 = require("../../components/DownloadStatusAndProgress");
const Detail = () => {
    const detailedEntry = (0, index_1.useBoundStore)((state) => state.detailedEntry);
    const downloadProgressMap = (0, index_1.useBoundStore)((state) => state.downloadProgressMap);
    const downloadProgressData = detailedEntry ? downloadProgressMap[detailedEntry.id] : undefined;
    if (!detailedEntry) {
        return null;
    }
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ResultListInfo_1.default, null),
        react_1.default.createElement(ContentContainer_1.default, null,
            Object.entries(detailedEntry).map(([key, value], idx) => (react_1.default.createElement(DetailRow_1.default, { key: idx, label: key === "id" ? key.toUpperCase() : `${key[0].toUpperCase()}${key.slice(1)}`, description: value }))),
            downloadProgressData && (react_1.default.createElement(ink_1.Box, { paddingLeft: 3 },
                react_1.default.createElement(DownloadStatusAndProgress_1.DownloadStatusAndProgress, { downloadProgressData: downloadProgressData }))),
            react_1.default.createElement(DetailEntryOptions_1.default, null)),
        react_1.default.createElement(UsageInfo_1.default, null)));
};
exports.default = Detail;
