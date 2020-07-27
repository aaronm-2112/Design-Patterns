import IYT from './IYT';

//purpose: Act as a proxy for the youtube service (which directly contacts the Youtube API). 


export default class CachedYoutubeClass implements IYT {
  //contacts the Youtube API
  private service: IYT;
  //cache of video listing information
  private videoList: string[] = [];
  //would be a buffer of some sort in actual code[also a cache]
  private videoDataCache: string = "";
  //checks if cache needs to be reset
  private needsReset: boolean = false;


  constructor(service: IYT) {
    this.service = service;
  }

  listVideos(): string[] {
    //check if video list is null or needs to be reset
    if (this.videoList === null || this.needsReset || this.videoList.length < 1) {
      //if so we need to use the service to call YT for a video listing and cache it in our class
      this.videoList = this.service.listVideos();
    }

    //return the list of cached videos
    return this.videoList;
  }

  getVideoInfo(id: number): string {
    if (this.videoDataCache === null || this.needsReset || this.videoDataCache.length < 1) {
      this.videoDataCache = this.service.getVideoInfo(id);
    }

    return this.videoDataCache;
  }

  downloadVideo(id: number): void {
    if (!this.downloadExists(id) || this.needsReset) {
      this.service.downloadVideo(id);
    }
  }

  private downloadExists(id: number): boolean {
    if (this.videoDataCache.length !== 0) {
      return true;
    }

    return false;
  }
}