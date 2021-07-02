import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftCategoryComponent } from './soft-category.component';

describe('SoftCategoryComponent', () => {
  let component: SoftCategoryComponent;
  let fixture: ComponentFixture<SoftCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
