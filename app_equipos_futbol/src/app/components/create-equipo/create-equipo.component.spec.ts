import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipoComponent } from './create-equipo.component';

describe('CreateEquipoComponent', () => {
  let component: CreateEquipoComponent;
  let fixture: ComponentFixture<CreateEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEquipoComponent]
    });
    fixture = TestBed.createComponent(CreateEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
