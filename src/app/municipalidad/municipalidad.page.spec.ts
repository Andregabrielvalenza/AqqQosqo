import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MunicipalidadPage } from './municipalidad.page';

describe('MunicipalidadPage', () => {
  let component: MunicipalidadPage;
  let fixture: ComponentFixture<MunicipalidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MunicipalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
