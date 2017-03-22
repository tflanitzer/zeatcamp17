import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainPersonComponent } from './train-person.component';

describe('TrainPersonComponent', () => {
  let component: TrainPersonComponent;
  let fixture: ComponentFixture<TrainPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
