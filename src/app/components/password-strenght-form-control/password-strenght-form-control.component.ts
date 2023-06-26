import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { PasswordStrengthService } from "src/app/services/password-strength-service.service";

@Component({
  selector: "app-password-strenght-form-control",
  templateUrl: "./password-strenght-form-control.component.html",
  styleUrls: ["./password-strenght-form-control.component.scss"],
  providers: [PasswordStrengthService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting:forwardRef(() => PasswordStrenghtFormControlComponent),
    },
  ],
})
export class PasswordStrenghtFormControlComponent
  implements ControlValueAccessor
{
public password:string | undefined

 public onChange = (password: string) => {this.passwordStrengthService.checkPasswordStrength(password)};

 public onTouched = () => {};

  constructor(
    private passwordStrengthService: PasswordStrengthService
  ){}


  writeValue(password: string): void {
    this.password = password;
    this.passwordStrengthService.checkPasswordStrength(password)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
