import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAdminstradoresComponent } from './control-adminstradores.component';

describe('ControlAdminstradoresComponent', () => {
  let component: ControlAdminstradoresComponent;
  let fixture: ComponentFixture<ControlAdminstradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAdminstradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAdminstradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
