import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioDetallePage } from './calendario-detalle.page';

describe('CalendarioDetallePage', () => {
  let component: CalendarioDetallePage;
  let fixture: ComponentFixture<CalendarioDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
