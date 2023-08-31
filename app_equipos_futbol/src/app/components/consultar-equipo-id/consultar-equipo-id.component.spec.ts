import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEquipoComponent } from './consultar-equipo-id.component';

describe('ConsultarEquipoIdComponent', () => {
  let component: ConsultarEquipoComponent;
  let fixture: ComponentFixture<ConsultarEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEquipoComponent]
    });
    fixture = TestBed.createComponent(ConsultarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
