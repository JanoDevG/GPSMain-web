import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFlotaComponent } from './agregar-flota.component';

describe('AgregarFlotaComponent', () => {
  let component: AgregarFlotaComponent;
  let fixture: ComponentFixture<AgregarFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFlotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
