import { Component } from '@angular/core';

type Colors = 'grey' | 'red' | 'yellow' | 'green';
interface SectionsColor {
  first: Colors;
  second: Colors;
  third: Colors;
}

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  sectionColors: SectionsColor = {
    first: 'grey',
    second: 'grey',
    third: 'grey',
  };
  lettersAndDigits = /^[a-zA-Z0-9]+$/;
  lettersAndSymbols = /^[a-zA-Z!@#$%^&*()]+$/;
  digitsAndSymbols = /^[0-9!@#$%^&*()]+$/;
  onlyLetters = /^[a-zA-Z]+$/;
  onlyDigits = /^\d+$/;
  onlySymbols = /^[^a-zA-Z0-9]+$/;

  passwordChanged(event: any) {
    console.log(event.target.value, 'password');
    const value = event.target.value;
    if (value === '') {
      this.sectionColors = {
        first: 'grey',
        second: 'grey',
        third: 'grey',
      };
    } else if (value.length < 8) {
      this.sectionColors = {
        first: 'red',
        second: 'red',
        third: 'red',
      };
    } else if (
      this.onlyLetters.test(value) ||
      this.onlyDigits.test(value) ||
      this.onlySymbols.test(value)
    ) {
      this.sectionColors = {
        first: 'red',
        second: 'grey',
        third: 'grey',
      };
    }
     else if (
      this.lettersAndDigits.test(value) ||
      this.lettersAndSymbols.test(value) ||
      this.digitsAndSymbols.test(value)
    ) {
      this.sectionColors = {
        first: 'yellow',
        second: 'yellow',
        third: 'grey',
      };
    } else{
      this.sectionColors = {
        first: 'green',
        second: 'green',
        third: 'green',
      };
    }
  }
}
