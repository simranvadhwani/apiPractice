import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueLocalStorageComponent } from './value-local-storage.component';

describe('ValueLocalStorageComponent', () => {
  let component: ValueLocalStorageComponent;
  let fixture: ComponentFixture<ValueLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueLocalStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
