import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoadingSpinnerComponent } from './shered/loading-spinner/loading-spinner.component';

import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomepageComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
