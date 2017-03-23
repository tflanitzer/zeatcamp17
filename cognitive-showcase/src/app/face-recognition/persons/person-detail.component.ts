import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Person } from "app/face-recognition/person";
import { FetchPersonService } from "app/face-recognition/fetch-person.service";
import { DeletePersonService } from "app/face-recognition/delete-person.service";

@Component({
  template: `
  <div *ngIf="person" class="container">
    <div>
      
        <div class="form-group">
          <label>Name:</label>
          <input class="form-control form-control-lg" [(ngModel)]="person.name">
        </div>
        <div class="form-group">
          <label for="pwd">UserData:</label>
          <input type="text" class="form-control" id="userData"  value="{{ person.userData }}">
        </div>
        <button class="btn btn-danger" (click)="delete()">Delete</button>
        <!--<button class="btn btn-success">Update</button>-->
        <!--<button class="btn btn-danger">Clear Trainingdata</button>-->
        <button class="btn btn-success" (click)="train()">Train</button>
     
    </div>
  </div>
  `
})
export class PersonDetailComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  person: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FetchPersonService,
    private deletePersonService: DeletePersonService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getPerson(params['id']))
      .subscribe((person: Person) => this.person = person);
  }

  delete() {
    this.deletePersonService.deletePerson(this.person.personId).subscribe(response => {});

    //TODO: check if result was ok 
    this.router.navigate(['face-recognition/persons']);
  }

  train() {
    this.router.navigate(['face-recognition/train', this.person.personId]);
  }
}