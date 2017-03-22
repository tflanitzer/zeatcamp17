import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListPersonsService } from "app/list-persons.service";
import { DefinePersonService } from "app/define-person.service";
import { Person } from "app/person";


@Component({
  template:`
    <p>
        Name: <input type="text" name="fname" [(ngModel)]="nameToAdd"><br>
        Content: <input type="text" name="lname" [(ngModel)]="dataToAdd"><br>
    </p>

    <div>
        <button title="Add Person" (click)="addPerson()">Add Person</button>
    </div>  
 `
})
export class PersonAddComponent implements OnInit {
    

  nameToAdd:string;
  dataToAdd:string;

  constructor(private definePersonService:DefinePersonService, private router: Router) { }

  ngOnInit() {
  }

  addPerson() {
    
    
    this.definePersonService.createPerson(this.nameToAdd, this.dataToAdd)
                    .subscribe(response => {});

    //TODO: check if result was ok 
    this.router.navigate(['/persons']);
  }

}
