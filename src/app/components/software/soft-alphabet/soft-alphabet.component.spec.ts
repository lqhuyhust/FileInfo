import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftAlphabetComponent } from './soft-alphabet.component';

describe('SoftAlphabetComponent', () => {
  let component: SoftAlphabetComponent;
  let fixture: ComponentFixture<SoftAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftAlphabetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
