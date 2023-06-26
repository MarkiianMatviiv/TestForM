import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrenghtFormComponent } from './password-strenght-form.component';

describe('PasswordStrenghtFormComponent', () => {
  let component: PasswordStrenghtFormComponent;
  let fixture: ComponentFixture<PasswordStrenghtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrenghtFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrenghtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
