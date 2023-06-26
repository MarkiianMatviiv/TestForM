import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordStrengthService, SectionsColor } from 'src/app/src/password-strength-service.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true
    },
    PasswordStrengthService
  ]
})
export class PasswordStrengthComponent implements ControlValueAccessor, OnInit {
  formWithPassword: FormGroup = new FormGroup({});
  onChange: any = () => {};
  sectionColors: SectionsColor = {
    first: 'grey',
    second: 'grey',
    third: 'grey',
  };

  constructor(
    private formBuilder: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) {}

  ngOnInit() {
    this.formWithPassword = this.formBuilder.group({
      passwordControl: ''
    });

    this.formWithPassword.get('passwordControl')?.valueChanges.subscribe(password => {
      this.onChange(password);
      this.updateSectionColors(password);
    });
  }

  writeValue(password: string): void {
    this.formWithPassword?.patchValue({ passwordControl: password });
    this.updateSectionColors(password);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}


  private updateSectionColors(password: string): void {
    this.sectionColors = this.passwordStrengthService.checkPasswordStrength(password);
  }
}


