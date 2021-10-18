import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBackofficeComponent } from './agregar-backoffice.component';

describe('AgregarBackofficeComponent', () => {
  let component: AgregarBackofficeComponent;
  let fixture: ComponentFixture<AgregarBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
