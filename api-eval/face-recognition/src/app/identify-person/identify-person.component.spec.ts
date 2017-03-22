import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyPersonComponent } from './identify-person.component';

describe('IdentifyPersonComponent', () => {
  let component: IdentifyPersonComponent;
  let fixture: ComponentFixture<IdentifyPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
