import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEmpresasComponent } from './control-empresas.component';

describe('ControlEmpresasComponent', () => {
  let component: ControlEmpresasComponent;
  let fixture: ComponentFixture<ControlEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
