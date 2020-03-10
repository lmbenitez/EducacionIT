import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseAngularComponent } from './clase-angular.component';

describe('ClaseAngularComponent', () => {
  let component: ClaseAngularComponent;
  let fixture: ComponentFixture<ClaseAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
