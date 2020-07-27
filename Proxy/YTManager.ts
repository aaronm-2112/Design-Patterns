import IYT from './IYT';

export default class YoutubeManager {
  private service: IYT;

  constructor(service: IYT) {
    this.service = service;
  }

  renderVideoPage(id: number): void {
    let info: string = this.service.getVideoInfo(id);

    console.log(info);
  }

  renderListPanel(): void {
    let list: string[] = this.service.listVideos();

    console.log(list);
  }

  userInput(id: number): void {
    this.renderVideoPage(id);
    this.renderListPanel();
  }
}