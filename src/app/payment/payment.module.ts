import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
