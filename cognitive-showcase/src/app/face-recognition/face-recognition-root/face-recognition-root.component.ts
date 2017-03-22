import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  template: `
    <div class="container">
      <div class="text-center">
        <app-webcam></app-webcam>
      </div>
    </div>
    <div class="container">
      <div class="text-center">
    <nav>
        <button  routerLink="persons" class="btn btn-success">Personen</button>
        
        <button routerLink="detection" class="btn btn-danger">Detection</button>
      </nav>
      </div>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class FaceRecognitionRootComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPersons() {
    this.router.navigate([{ outlets: { aux: 'persons' }}]);
  }

}
