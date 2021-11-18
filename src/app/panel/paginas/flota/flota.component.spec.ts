import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaComponent } from './flota.component';

describe('FlotaComponent', () => {
  let component: FlotaComponent;
  let fixture: ComponentFixture<FlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
