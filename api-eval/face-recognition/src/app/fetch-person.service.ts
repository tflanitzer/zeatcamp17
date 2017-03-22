import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Person} from "./person";

import 'rxjs/add/operator/map'
@Injectable()
export class FetchPersonService {

  definePersonEndpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons/';

  personGroupID = 1;
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  getPerson(personId:string) :Observable<Person>{

    let url = this.definePersonEndpoint + personId;

    let requestHeaders = new Headers({ 
              'Accept': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });
    console.log(url);
    return this.http.get(url, options)
                    .map(extractData => {
                      console.log(extractData);
                      return extractData.json();
                    });
    
  }

}
