import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSignatoryComponent } from './add-signatory.component';

describe('AddSignatoryComponent', () => {
  let component: AddSignatoryComponent;
  let fixture: ComponentFixture<AddSignatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSignatoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSignatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
