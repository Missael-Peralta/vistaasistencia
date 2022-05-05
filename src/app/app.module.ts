import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
