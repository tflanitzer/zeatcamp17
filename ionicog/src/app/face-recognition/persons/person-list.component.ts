import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Person } from "../person";
import { ListPersonsService } from "../list-persons.service";

@Component({
  template: `
  <div class="container">
    <div class="list-group">
    <a  class="list-group-item"  
        *ngFor="let person of persons | async" 
        [class.selected]="isSelected(person)"
        (click)="onSelect(person)">
            {{ person.name }} <span class="badge">{{ person.persistedFaceIds.length }}</span>
        </a>
    </div>
    <div class="container">
        <div class="text-center">
            <button (click)="createNew()" class="btn btn-success">Create New</button>
        </div>
    </div>
</div>
  `
})
export class PersonListComponent implements OnInit {
  
  persons: Observable<Person[]>;

  private selectedId: string;

  constructor(
    private service: ListPersonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
      this.persons = this.service.getPersons();
  }

  isSelected(person: Person) { return person.personId === this.selectedId; }


  onSelect(person: Person) {
    this.router.navigate(['face-recognition/person', person.personId]);
  }

  createNew() {
    this.router.navigate(['face-recognition/addperson']);
  }
}