import { Component, OnInit } from '@angular/core';
import { ListPersonsService } from "app/list-persons.service";
import { DefinePersonService } from "app/define-person.service";
import {Person} from "app/person";


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  persons:Person[];
  nameToAdd:string;
  dataToAdd:string;

  constructor(private listPersonService:ListPersonsService, private definePersonService:DefinePersonService) { }

  ngOnInit() {
    this.getPersons();
  }

   getPersons() {
    this.listPersonService.getPersons()
                     .subscribe(
                       response => this.persons = response);
  }

  addPerson() {
    this.definePersonService.createPerson(this.nameToAdd, this.dataToAdd).subscribe(response => {});
    this.getPersons();
  }

}
