import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioFiestasPage } from './calendario-fiestas.page';

describe('CalendarioFiestasPage', () => {
  let component: CalendarioFiestasPage;
  let fixture: ComponentFixture<CalendarioFiestasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioFiestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
