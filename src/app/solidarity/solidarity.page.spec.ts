import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolidarityPage } from './solidarity.page';

describe('SolidarityPage', () => {
  let component: SolidarityPage;
  let fixture: ComponentFixture<SolidarityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolidarityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
