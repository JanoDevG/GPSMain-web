import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpresaComponent } from './agregar-empresa.component';

describe('AgregarEmpresaComponent', () => {
  let component: AgregarEmpresaComponent;
  let fixture: ComponentFixture<AgregarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
