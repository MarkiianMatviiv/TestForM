import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrenghtFormControlComponent } from './password-strenght-form-control.component';

describe('PasswordStrenghtFormControlComponent', () => {
  let component: PasswordStrenghtFormControlComponent;
  let fixture: ComponentFixture<PasswordStrenghtFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrenghtFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrenghtFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
