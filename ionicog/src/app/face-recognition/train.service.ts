import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class TrainService {
  
  definePersonEndpoint:string = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/train ';
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  trainGroup() : Observable<Response>{

    
    let requestHeaders = new Headers({ 
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    return this.http.post(this.definePersonEndpoint, "{}", options) .map(extractData => {
                      
                      return extractData;
                    });
                   
                  
  }
}
