import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGpsComponent } from './agregar-gps.component';

describe('AgregarGpsComponent', () => {
  let component: AgregarGpsComponent;
  let fixture: ComponentFixture<AgregarGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
