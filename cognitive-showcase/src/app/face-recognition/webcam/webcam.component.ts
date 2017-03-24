import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Rx";
import { WebcamStorageService } from "app/shared/webcam-storage.service";


@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

    public videosrc:any;
    imageURL:string;
    imageURLAsString:string;
    private _videoStream:any;

    private videoElement:any;

    constructor(private sanitizer:DomSanitizer, private element:ElementRef, private localService:WebcamStorageService) {
    }

    ngOnInit() {
        this.videoElement = this.element.nativeElement.querySelector('video');
        this.showCam();
        let timer = Observable.timer(4000,5000);
        timer.subscribe(t =>
            this.performCapture()
        );
    }

    private showCam() {
        // 1. Casting necessary because TypeScript doesn't
        // know object Type 'navigator';
        let nav = <any>navigator;

        // 2. Adjust for all browsers
        nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;

        // 3. Trigger lifecycle tick (ugly, but works - see (better) Promise example below)
        //setTimeout(() => { }, 100);

      // 4. Get stream from webcam
      var promise = new Promise<string>((resolve, reject) => {
          nav.getUserMedia({video: true}, (_videoStream) => {
              resolve(_videoStream);
          }, (err) => reject(err));
      }).then((_videoStream) => {
          let webcamUrl = URL.createObjectURL(_videoStream);
          this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
          this.videoElement.autoplay = true;
      }).catch((error) => {
          console.log(error);
      });
        
    }

    performCapture() {
      var hiddenCanvas = document.createElement('canvas');
      
      hiddenCanvas.height = this.videoElement.videoHeight;
      hiddenCanvas.width = this.videoElement.videoWidth;

      var ctx = hiddenCanvas.getContext('2d');
       
      ctx.drawImage(this.videoElement,0, 0, hiddenCanvas.width, hiddenCanvas.height);

      this.imageURL = hiddenCanvas.toDataURL('image/png'); 
      
      var mimeString = this.imageURL.split(',')[0].split(':')[1].split(';')[0];
      this.localService.storeUrl(this.imageURL);
      this.localService.storeScreenShoot(this.dataURItoBlob(this.imageURL, mimeString));
    }

    dataURItoBlob(dataURI, mimeString:string) {
      var byteString = atob(dataURI.split(',')[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
}

}
