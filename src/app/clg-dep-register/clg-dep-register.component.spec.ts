import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgDepRegisterComponent } from './clg-dep-register.component';

describe('ClgDepRegisterComponent', () => {
  let component: ClgDepRegisterComponent;
  let fixture: ComponentFixture<ClgDepRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClgDepRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgDepRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
