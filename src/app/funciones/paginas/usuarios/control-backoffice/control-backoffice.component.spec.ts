import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBackofficeComponent } from './control-backoffice.component';

describe('ControlBackofficeComponent', () => {
  let component: ControlBackofficeComponent;
  let fixture: ComponentFixture<ControlBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
