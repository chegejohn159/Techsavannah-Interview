import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatoriesTabComponent } from './signatories-tab.component';

describe('SignatoriesTabComponent', () => {
  let component: SignatoriesTabComponent;
  let fixture: ComponentFixture<SignatoriesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatoriesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatoriesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
