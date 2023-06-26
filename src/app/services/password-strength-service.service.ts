import { Injectable } from '@angular/core';

type Colors = 'grey' | 'red' | 'yellow' | 'green';
export interface SectionsColor {
  first: Colors;
  second: Colors;
  third: Colors;
}

@Injectable()
export class PasswordStrengthService {
  private sectionColors: SectionsColor = {
    first: 'grey',
    second: 'grey',
    third: 'grey',
  };

  private lettersAndDigits = /^[a-zA-Z0-9]+$/;
  private lettersAndSymbols = /^[a-zA-Z!@#$%^&*()]+$/;
  private digitsAndSymbols = /^[0-9!@#$%^&*()]+$/;
  private onlyLetters = /^[a-zA-Z]+$/;
  private onlyDigits = /^\d+$/;
  private onlySymbols = /^[^a-zA-Z0-9]+$/;

  checkPasswordStrength(password: string): SectionsColor {
    switch (true) {
      case !password:
        this.sectionColors = {
          first: 'grey',
          second: 'grey',
          third: 'grey',
        };
        break;
      case password.length < 8:
        this.sectionColors = {
          first: 'red',
          second: 'red',
          third: 'red',
        };
        break;
      case (
        this.onlyLetters.test(password) ||
        this.onlyDigits.test(password) ||
        this.onlySymbols.test(password)
      ):
        this.sectionColors = {
          first: 'red',
          second: 'grey',
          third: 'grey',
        };
        break;
      case (
        this.lettersAndDigits.test(password) ||
        this.lettersAndSymbols.test(password) ||
        this.digitsAndSymbols.test(password)
      ):
        this.sectionColors = {
          first: 'yellow',
          second: 'yellow',
          third: 'grey',
        };
        break;
      default:
        this.sectionColors = {
          first: 'green',
          second: 'green',
          third: 'green',
        };
    }
  
    return this.sectionColors;
  }
}