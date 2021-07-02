import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftDetailComponent } from './soft-detail.component';

describe('SoftDetailComponent', () => {
  let component: SoftDetailComponent;
  let fixture: ComponentFixture<SoftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
