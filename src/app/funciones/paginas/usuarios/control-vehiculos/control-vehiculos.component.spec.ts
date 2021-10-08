import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVehiculosComponent } from './control-vehiculos.component';

describe('ControlVehiculosComponent', () => {
  let component: ControlVehiculosComponent;
  let fixture: ComponentFixture<ControlVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
