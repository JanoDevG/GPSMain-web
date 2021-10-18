import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGerentesComponent } from './control-gerentes.component';

describe('ControlGerentesComponent', () => {
  let component: ControlGerentesComponent;
  let fixture: ComponentFixture<ControlGerentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGerentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGerentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
