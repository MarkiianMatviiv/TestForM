import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrenghtFormControlComponent } from './components/password-strenght-form-control/password-strenght-form-control.component';
import { PasswordStrenghtFormComponent } from './components/password-strenght-form/password-strenght-form.component';
import { PasswordStrengthService } from './services/password-strength-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrenghtFormControlComponent,
    PasswordStrenghtFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
