"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkDownloadAfterCompleteOptions = void 0;
const react_1 = __importDefault(require("react"));
const options_1 = require("../../../options");
const index_1 = require("../../store/index");
const labels_1 = __importDefault(require("../../../labels"));
const keys_1 = require("../keys");
const OptionList_1 = __importDefault(require("../../components/OptionList"));
function BulkDownloadAfterCompleteOptions() {
    const setActiveLayout = (0, index_1.useBoundStore)((state) => state.setActiveLayout);
    const backToSearch = (0, index_1.useBoundStore)((state) => state.backToSearch);
    const resetBulkDownloadQueue = (0, index_1.useBoundStore)((state) => state.resetBulkDownloadQueue);
    const options = {
        [options_1.BulkDownloadAfterCompleteOption.TURN_BACK_TO_THE_LIST]: {
            label: labels_1.default.TURN_BACK_TO_THE_LIST,
            onSelect: () => {
                resetBulkDownloadQueue();
                setActiveLayout(keys_1.LAYOUT_KEY.RESULT_LIST_LAYOUT);
            },
        },
        [options_1.BulkDownloadAfterCompleteOption.BACK_TO_SEARCH]: {
            label: labels_1.default.SEARCH,
            onSelect: () => {
                resetBulkDownloadQueue();
                backToSearch();
            },
        },
    };
    return react_1.default.createElement(OptionList_1.default, { options: options });
}
exports.BulkDownloadAfterCompleteOptions = BulkDownloadAfterCompleteOptions;
