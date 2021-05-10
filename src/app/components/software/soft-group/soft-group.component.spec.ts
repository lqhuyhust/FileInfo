import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftGroupComponent } from './soft-group.component';

describe('SoftGroupComponent', () => {
  let component: SoftGroupComponent;
  let fixture: ComponentFixture<SoftGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
