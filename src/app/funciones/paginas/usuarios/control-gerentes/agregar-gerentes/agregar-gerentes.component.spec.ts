import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGerentesComponent } from './agregar-gerentes.component';

describe('AgregarGerentesComponent', () => {
  let component: AgregarGerentesComponent;
  let fixture: ComponentFixture<AgregarGerentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGerentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGerentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
