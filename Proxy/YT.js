"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThirdPartyYoutubeClass = /** @class */ (function () {
    function ThirdPartyYoutubeClass() {
    }
    ThirdPartyYoutubeClass.prototype.listVideos = function () {
        //send an api request to Youtube
        console.log("API request for videos sent to youtube");
        return ["Video One", "Video Two"];
    };
    ThirdPartyYoutubeClass.prototype.getVideoInfo = function (id) {
        //get metadata about a video 
        return "Video metadata";
    };
    //a costly operation that we will use the proxy to cache 
    ThirdPartyYoutubeClass.prototype.downloadVideo = function (id) {
        console.log("Video downloading");
    };
    return ThirdPartyYoutubeClass;
}());
exports.default = ThirdPartyYoutubeClass;
