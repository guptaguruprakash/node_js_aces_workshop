"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownloadProgress = void 0;
const filesize_1 = require("filesize");
const getDownloadProgress = (progress, total) => {
    const progressPercentage = (total === 0 ? 0 : (progress / total) * 100).toFixed(2);
    const downloadedSize = (0, filesize_1.filesize)(progress, {
        base: 2,
        standard: "jedec",
    });
    const totalSize = (0, filesize_1.filesize)(total, {
        base: 2,
        standard: "jedec",
    });
    return {
        progressPercentage,
        downloadedSize,
        totalSize,
    };
};
exports.getDownloadProgress = getDownloadProgress;
