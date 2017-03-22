import { Injectable } from '@angular/core';

@Injectable()
export class FaceRecognitionServiceService {

  private currentPicture:Blob;

  constructor() { }

  public storeScreenShoot(data:Blob) {
    this.currentPicture = data;
  }

  public getLatestScreenShot():Blob {
    return this.currentPicture;
  }

}
