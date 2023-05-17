import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiccionarioQuechuaPage } from './diccionario-quechua.page';

describe('DiccionarioQuechuaPage', () => {
  let component: DiccionarioQuechuaPage;
  let fixture: ComponentFixture<DiccionarioQuechuaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiccionarioQuechuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
