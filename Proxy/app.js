"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var YT_1 = __importDefault(require("./YT"));
var ProxyYT_1 = __importDefault(require("./ProxyYT"));
var YTManager_1 = __importDefault(require("./YTManager"));
var ytService = new YT_1.default();
var ytProxy = new ProxyYT_1.default(ytService);
var manager = new YTManager_1.default(ytProxy);
manager.userInput(4);
