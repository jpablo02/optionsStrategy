import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaOpcionesCubiertasComponent } from './venta-opciones-cubiertas.component';

describe('VentaOpcionesCubiertasComponent', () => {
  let component: VentaOpcionesCubiertasComponent;
  let fixture: ComponentFixture<VentaOpcionesCubiertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaOpcionesCubiertasComponent]
    });
    fixture = TestBed.createComponent(VentaOpcionesCubiertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
