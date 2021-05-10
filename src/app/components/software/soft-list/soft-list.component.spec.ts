import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftListComponent } from './soft-list.component';

describe('SoftListComponent', () => {
  let component: SoftListComponent;
  let fixture: ComponentFixture<SoftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
