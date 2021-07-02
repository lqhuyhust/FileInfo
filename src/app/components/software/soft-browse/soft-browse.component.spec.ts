import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftBrowseComponent } from './soft-browse.component';

describe('SoftBrowseComponent', () => {
  let component: SoftBrowseComponent;
  let fixture: ComponentFixture<SoftBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
