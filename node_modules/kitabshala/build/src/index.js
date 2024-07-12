"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_VERSION = void 0;
const index_1 = require("./cli/index");
const operate_1 = require("./cli/operate");
const package_json_1 = require("../package.json");
exports.APP_VERSION = package_json_1.version;
(0, operate_1.operate)(index_1.cli.flags);
