import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperadoresAutorizadosPage } from './operadores-autorizados.page';

describe('OperadoresAutorizadosPage', () => {
  let component: OperadoresAutorizadosPage;
  let fixture: ComponentFixture<OperadoresAutorizadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OperadoresAutorizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
