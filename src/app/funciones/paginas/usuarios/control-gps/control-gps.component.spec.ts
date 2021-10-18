import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGpsComponent } from './control-gps.component';

describe('ControlGpsComponent', () => {
  let component: ControlGpsComponent;
  let fixture: ComponentFixture<ControlGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
