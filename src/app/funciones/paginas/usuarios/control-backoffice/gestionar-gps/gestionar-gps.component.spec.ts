import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarGpsComponent } from './gestionar-gps.component';

describe('GestionarGpsComponent', () => {
  let component: GestionarGpsComponent;
  let fixture: ComponentFixture<GestionarGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarGpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
