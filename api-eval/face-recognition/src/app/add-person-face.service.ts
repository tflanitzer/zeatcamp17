import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Person } from "app/person";

@Injectable()
export class AddPersonFaceService {

  definePersonEndpoint:string = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons/';
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  addFaceToPerson(personId:String, data:Blob) : Observable<Response>{

    let url = this.definePersonEndpoint + personId + '/persistedFaces';
    let requestHeaders = new Headers({ 
              'Content-Type': 'application/octet-stream',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    return this.http.post(url, data, options) 
                        .map(extractData => { 
                            return extractData;
                          }
                        );
  }
}
