import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuntosInteresDetallePage } from './puntos-interes-detalle.page';

describe('PuntosInteresDetallePage', () => {
  let component: PuntosInteresDetallePage;
  let fixture: ComponentFixture<PuntosInteresDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PuntosInteresDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
