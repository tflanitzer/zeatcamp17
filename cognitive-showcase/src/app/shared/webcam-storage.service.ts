import { Injectable } from '@angular/core';

@Injectable()
export class WebcamStorageService {

  private currentPicture:Blob;

  constructor() { }

  public storeScreenShoot(data:Blob) {
    this.currentPicture = data;
  }

  public getLatestScreenShot():Blob {
    return this.currentPicture;
  }

}
