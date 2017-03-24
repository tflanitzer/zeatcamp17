import { Injectable } from '@angular/core';

@Injectable()
export class WebcamStorageService {

  private currentPicture:Blob;
  private currentImgUrl:string;

  constructor() { }

  public storeScreenShoot(data:Blob) {
    this.currentPicture = data;
  }

  public getLatestScreenShot():Blob {
    return this.currentPicture;
  }

  public storeUrl(url:string){
    this.currentImgUrl = url;
  }

  public getLatestUrl():string {
    return this.currentImgUrl;
  }
}
