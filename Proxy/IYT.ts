
export default interface IThirdPartyYoutubeLib {
  listVideos(): string[];
  getVideoInfo(id: number): string;
  downloadVideo(id: number): void;
}