import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSoporteComponent } from './control-soporte.component';

describe('ControlSoporteComponent', () => {
  let component: ControlSoporteComponent;
  let fixture: ComponentFixture<ControlSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
