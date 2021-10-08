import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDespachoComponent } from './control-despacho.component';

describe('ControlDespachoComponent', () => {
  let component: ControlDespachoComponent;
  let fixture: ComponentFixture<ControlDespachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDespachoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
