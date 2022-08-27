import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { CardComponent } from './card/card.component';
import { DepositComponent } from './deposit/deposit.component';
import { ComboDirective } from './combo.directive';
import { ComboDropdownComponent } from './combo-dropdown/combo-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DepositComponent,
    ComboDirective,
    ComboDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
