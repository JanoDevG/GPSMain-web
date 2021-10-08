import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlConductoresComponent } from './control-conductores.component';

describe('ControlConductoresComponent', () => {
  let component: ControlConductoresComponent;
  let fixture: ComponentFixture<ControlConductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlConductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
