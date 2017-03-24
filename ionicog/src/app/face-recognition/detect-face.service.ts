import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Face } from "../face-recognition/face";


@Injectable()
export class DetectFaceService {

  detectFaceEndpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion';
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  detectFace(data:Blob) : Observable<Face[]>{

    let requestHeaders = new Headers({ 
              'Content-Type': 'application/octet-stream',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    return this.http.post(this.detectFaceEndpoint, data, options) .map(extractData => {
                      return extractData.json();
                    });
                   
                  
  }
}
