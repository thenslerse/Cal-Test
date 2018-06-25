import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsCalComponent } from './shared/component/js-cal/js-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    JsCalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
