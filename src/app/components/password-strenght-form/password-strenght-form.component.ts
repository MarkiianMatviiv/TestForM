import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-strenght-form',
  templateUrl: './password-strenght-form.component.html',
  styleUrls: ['./password-strenght-form.component.scss']
})
export class PasswordStrenghtFormComponent {
  FormGroup = new FormGroup({
    passwordControl: new FormControl('')
  })
}
