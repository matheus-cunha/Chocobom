import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BoxComponent } from './box/box.component';
import { FooterComponent } from './footer/footer.component';
import { PromoBoxComponent } from './promo-box/promo-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoxComponent,
    FooterComponent,
    PromoBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
