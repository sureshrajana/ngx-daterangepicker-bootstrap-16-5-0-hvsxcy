import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  NgxDaterangepickerBootstrapModule,
  NgxDaterangepickerLocaleService,
} from 'ngx-daterangepicker-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDaterangepickerBootstrapModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [NgxDaterangepickerLocaleService],
})
export class AppModule {}
