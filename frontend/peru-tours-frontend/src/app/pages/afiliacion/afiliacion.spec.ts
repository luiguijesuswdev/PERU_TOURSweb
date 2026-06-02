import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Afiliacion } from './afiliacion';

describe('Afiliacion', () => {
  let component: Afiliacion;
  let fixture: ComponentFixture<Afiliacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Afiliacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Afiliacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
