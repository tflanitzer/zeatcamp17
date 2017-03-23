import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DeletePersonService {

  deletePersonEndpoint:string = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons/';
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  deletePerson(personId:String) : Observable<Response>{

    let url = this.deletePersonEndpoint + personId ;
    let requestHeaders = new Headers({ 
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    return this.http.delete(url, options)
                        .map(extractData => { 
                            return extractData;
                          }
                        );
  }

}
