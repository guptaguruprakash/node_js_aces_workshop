"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeExitOption = exports.ErrorMessageOption = exports.BulkDownloadAfterCompleteOption = exports.DetailEntryOption = exports.ResultListEntryOption = exports.Option = void 0;
var Option;
(function (Option) {
    Option["SEARCH"] = "search_option";
    Option["NEXT_PAGE"] = "next_page_option";
    Option["PREV_PAGE"] = "prev_page_option";
    Option["START_BULK_DOWNLOAD"] = "start_bulk_download_option";
    Option["EXIT"] = "exit_option";
    Option["SEE_DETAILS"] = "see_details_option";
    Option["ALTERNATIVE_DOWNLOADS"] = "alternative_downloads";
    Option["DOWNLOAD_DIRECTLY"] = "download_directly_option";
    Option["ADD_TO_BULK_DOWNLOAD_QUEUE"] = "add_to_bulk_download_queue_option";
    Option["REMOVE_FROM_BULK_DOWNLOAD_QUEUE"] = "remove_from_bulk_download_queue_option";
    Option["TURN_BACK_TO_THE_LIST"] = "turn_back_to_the_list_option";
    Option["BACK_TO_ENTRY_OPTIONS"] = "back_to_entry_options";
})(Option || (exports.Option = Option = {}));
var ResultListEntryOption;
(function (ResultListEntryOption) {
    ResultListEntryOption[ResultListEntryOption["SEE_DETAILS"] = 0] = "SEE_DETAILS";
    ResultListEntryOption[ResultListEntryOption["ALTERNATIVE_DOWNLOADS"] = 1] = "ALTERNATIVE_DOWNLOADS";
    ResultListEntryOption[ResultListEntryOption["DOWNLOAD_DIRECTLY"] = 2] = "DOWNLOAD_DIRECTLY";
    ResultListEntryOption[ResultListEntryOption["BULK_DOWNLOAD_QUEUE"] = 3] = "BULK_DOWNLOAD_QUEUE";
    ResultListEntryOption[ResultListEntryOption["TURN_BACK_TO_THE_LIST"] = 4] = "TURN_BACK_TO_THE_LIST";
    ResultListEntryOption[ResultListEntryOption["BACK_TO_ENTRY_OPTIONS"] = 5] = "BACK_TO_ENTRY_OPTIONS";
})(ResultListEntryOption || (exports.ResultListEntryOption = ResultListEntryOption = {}));
var DetailEntryOption;
(function (DetailEntryOption) {
    DetailEntryOption[DetailEntryOption["TURN_BACK_TO_THE_LIST"] = 0] = "TURN_BACK_TO_THE_LIST";
    DetailEntryOption[DetailEntryOption["DOWNLOAD_DIRECTLY"] = 1] = "DOWNLOAD_DIRECTLY";
    DetailEntryOption[DetailEntryOption["ALTERNATIVE_DOWNLOADS"] = 2] = "ALTERNATIVE_DOWNLOADS";
    DetailEntryOption[DetailEntryOption["BULK_DOWNLOAD_QUEUE"] = 3] = "BULK_DOWNLOAD_QUEUE";
    DetailEntryOption[DetailEntryOption["BACK_TO_ENTRY_OPTIONS"] = 4] = "BACK_TO_ENTRY_OPTIONS";
})(DetailEntryOption || (exports.DetailEntryOption = DetailEntryOption = {}));
var BulkDownloadAfterCompleteOption;
(function (BulkDownloadAfterCompleteOption) {
    BulkDownloadAfterCompleteOption[BulkDownloadAfterCompleteOption["TURN_BACK_TO_THE_LIST"] = 0] = "TURN_BACK_TO_THE_LIST";
    BulkDownloadAfterCompleteOption[BulkDownloadAfterCompleteOption["BACK_TO_SEARCH"] = 1] = "BACK_TO_SEARCH";
})(BulkDownloadAfterCompleteOption || (exports.BulkDownloadAfterCompleteOption = BulkDownloadAfterCompleteOption = {}));
var ErrorMessageOption;
(function (ErrorMessageOption) {
    ErrorMessageOption[ErrorMessageOption["EXIT"] = 0] = "EXIT";
})(ErrorMessageOption || (exports.ErrorMessageOption = ErrorMessageOption = {}));
var BeforeExitOption;
(function (BeforeExitOption) {
    BeforeExitOption[BeforeExitOption["YES"] = 0] = "YES";
    BeforeExitOption[BeforeExitOption["NO"] = 1] = "NO";
})(BeforeExitOption || (exports.BeforeExitOption = BeforeExitOption = {}));
