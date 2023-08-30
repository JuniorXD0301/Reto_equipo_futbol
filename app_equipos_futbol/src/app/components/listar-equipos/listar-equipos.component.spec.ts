import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquiposComponent } from './listar-equipos.component';

describe('ListarEquiposComponent', () => {
  let component: ListarEquiposComponent;
  let fixture: ComponentFixture<ListarEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEquiposComponent]
    });
    fixture = TestBed.createComponent(ListarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
