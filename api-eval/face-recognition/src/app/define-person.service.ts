import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers , Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Person} from "app/person";

import 'rxjs/add/operator/map'


@Injectable()
export class DefinePersonService {

  definePersonEndpoint = 'https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/1/persons';

  personGroupID = 1;
  subscriptionKey = 'd8037ec2d95a48d1bf9befa1e058e044';

  constructor(private http: Http) { }

  createPerson(personName:string, description:string) : Observable<Response>{

    let url = this.definePersonEndpoint ;  // + '?' + 'personGroupId=' + this.personGroupID ;

    let requestHeaders = new Headers({ 
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            });
    let options = new RequestOptions({ headers: requestHeaders });

    let person = new Person(personName,description);
    console.log(JSON.stringify(person));
    
    return this.http.post(this.definePersonEndpoint, JSON.stringify(person), options);
                   
                  
  }

}
