import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CulturaDetallePage } from './cultura-detalle.page';

describe('CulturaDetallePage', () => {
  let component: CulturaDetallePage;
  let fixture: ComponentFixture<CulturaDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CulturaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
