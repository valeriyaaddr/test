import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RandomComponent } from './components/random/random.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { FactCardComponent } from './components/fact-card/fact-card.component';
import { SearchComponent } from './components/search/search.component';
import { AppInterceptor } from './interceptors/app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    RandomComponent,
    SelectComponent,
    SwitchButtonComponent,
    FactCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
