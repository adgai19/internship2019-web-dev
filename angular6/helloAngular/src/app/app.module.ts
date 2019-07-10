import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { Helloworld2Component } from './helloworld2/helloworld2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Helloworld2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
