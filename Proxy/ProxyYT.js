"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//purpose: Act as a proxy for the youtube service (which directly contacts the Youtube API). 
var CachedYoutubeClass = /** @class */ (function () {
    function CachedYoutubeClass(service) {
        //cache of video listing information
        this.videoList = [];
        //would be a buffer of some sort in actual code[also a cache]
        this.videoDataCache = "";
        //checks if cache needs to be reset
        this.needsReset = false;
        this.service = service;
    }
    CachedYoutubeClass.prototype.listVideos = function () {
        //check if video list is null or needs to be reset
        if (this.videoList === null || this.needsReset || this.videoList.length < 1) {
            //if so we need to use the service to call YT for a video listing and cache it in our class
            this.videoList = this.service.listVideos();
        }
        //return the list of cached videos
        return this.videoList;
    };
    CachedYoutubeClass.prototype.getVideoInfo = function (id) {
        if (this.videoDataCache === null || this.needsReset || this.videoDataCache.length < 1) {
            this.videoDataCache = this.service.getVideoInfo(id);
        }
        return this.videoDataCache;
    };
    CachedYoutubeClass.prototype.downloadVideo = function (id) {
        if (!this.downloadExists(id) || this.needsReset) {
            this.service.downloadVideo(id);
        }
    };
    CachedYoutubeClass.prototype.downloadExists = function (id) {
        if (this.videoDataCache.length !== 0) {
            return true;
        }
        return false;
    };
    return CachedYoutubeClass;
}());
exports.default = CachedYoutubeClass;
