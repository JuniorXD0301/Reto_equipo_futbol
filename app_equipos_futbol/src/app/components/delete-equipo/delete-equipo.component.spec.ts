import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipoComponent } from './delete-equipo.component';

describe('DeleteEquipoComponent', () => {
  let component: DeleteEquipoComponent;
  let fixture: ComponentFixture<DeleteEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEquipoComponent]
    });
    fixture = TestBed.createComponent(DeleteEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
