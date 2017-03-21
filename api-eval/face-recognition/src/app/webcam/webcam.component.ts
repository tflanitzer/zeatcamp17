import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

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

    constructor(private sanitizer:DomSanitizer, private element:ElementRef) {
    }

    ngOnInit() {
        this.showCam();
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
        nav.getUserMedia(
            {video: true},
            (_videoStream) => {
                let webcamUrl = URL.createObjectURL(_videoStream);

                // 4a. Tell Angular the stream comes from a trusted source
                this.videosrc = this.sanitizer.bypassSecurityTrustUrl(webcamUrl);

                // 4b. Start video element to stream automatically from webcam.
                this.element.nativeElement.querySelector('video').autoplay = true;
            },
            (err) => console.log(err));


        // OR: other method, see http://stackoverflow.com/questions/32645724/angular2-cant-set-video-src-from-navigator-getusermedia for credits
        var promise = new Promise<string>((resolve, reject) => {
            nav.getUserMedia({video: true}, (_videoStream) => {
                resolve(_videoStream);
            }, (err) => reject(err));
        }).then((_videoStream) => {
            let webcamUrl = URL.createObjectURL(_videoStream);
            this.videosrc = this.sanitizer.bypassSecurityTrustResourceUrl(webcamUrl);
            // for example: type logic here to send stream to your  server and (re)distribute to
            // other connected clients.
        }).catch((error) => {
            console.log(error);
        });
    }

    performCapture() {
      var hiddenCanvas = document.createElement('canvas');
      var video = this.element.nativeElement.querySelector('video');

      hiddenCanvas.height = video.videoHeight /2;
      hiddenCanvas.width = video.videoWidth / 2;

      var ctx = hiddenCanvas.getContext('2d');
       
      ctx.drawImage(video,0, 0, hiddenCanvas.width, hiddenCanvas.height);

      this.imageURL = hiddenCanvas.toDataURL('image/png'); 
      this.imageURLAsString = hiddenCanvas.toDataURL();
      
      
      
    }

}
