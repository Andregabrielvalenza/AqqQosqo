import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDetallePage } from './blog-detalle.page';

describe('BlogDetallePage', () => {
  let component: BlogDetallePage;
  let fixture: ComponentFixture<BlogDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
