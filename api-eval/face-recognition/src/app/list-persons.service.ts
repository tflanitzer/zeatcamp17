import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Person} from "./person";

import 'rxjs/add/operator/map'
@Injectable()
export class ListPersonsService {

  definePersonEndpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons';

  personGroupID = 1;
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  getPersons() :Observable<Person[]>{

    let url = this.definePersonEndpoint ;  // + '?' + 'personGroupId=' + this.personGroupID ;

    let requestHeaders = new Headers({ 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    return this.http.get(this.definePersonEndpoint, options)
                    .map(extractData => {
                      let body = extractData.json();
                      console.log("body" + extractData.json());
                      return extractData.json();
                    });
    
  }

}
