import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class IdentifyService {

  definePersonEndpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0/identify';
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  identify(faceId:String) : Observable<IdentifyResult[]>{

    // prepare header
    let requestHeaders = new Headers({ 
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    // prepare requestbody 
    var request = {
      personGroupId: "1",
      faceIds: [
        faceId
      ],
      maxNumOfCandidatesReturned: 1,
      confidenceThreshold: 0.9
    };

    // make the call 
    return this.http.post(this.definePersonEndpoint, request, options) 
                    .map(extractData => {
                        return extractData.json();
                    });
  }
}



export interface IdentifyResult {
  faceId:string; 
  candidates:Candiate[];
}

export interface Candiate {
  personId:string;
  confidence:number;
}


