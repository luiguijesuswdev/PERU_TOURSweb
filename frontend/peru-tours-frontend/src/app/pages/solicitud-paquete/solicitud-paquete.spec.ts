import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPaquete } from './solicitud-paquete';

describe('SolicitudPaquete', () => {
  let component: SolicitudPaquete;
  let fixture: ComponentFixture<SolicitudPaquete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudPaquete],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudPaquete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
