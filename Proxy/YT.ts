import IYT from './IYT';

export default class ThirdPartyYoutubeClass implements IYT {
  listVideos(): string[] {
    //send an api request to Youtube
    console.log("API request for videos sent to youtube");
    return ["Video One", "Video Two"];
  }

  getVideoInfo(id: number): string {
    //get metadata about a video 
    return "Video metadata";
  }

  //a costly operation that we will use the proxy to cache 
  downloadVideo(id: number): void {
    console.log("Video downloading");
  }
}