"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YoutubeManager = /** @class */ (function () {
    function YoutubeManager(service) {
        this.service = service;
    }
    YoutubeManager.prototype.renderVideoPage = function (id) {
        var info = this.service.getVideoInfo(id);
        console.log(info);
    };
    YoutubeManager.prototype.renderListPanel = function () {
        var list = this.service.listVideos();
        console.log(list);
    };
    YoutubeManager.prototype.userInput = function (id) {
        this.renderVideoPage(id);
        this.renderListPanel();
    };
    return YoutubeManager;
}());
exports.default = YoutubeManager;
