import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MymoduleModule} from './mymodule/mymodule.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { Helloworld2Component } from './helloworld2/helloworld2.component';
import { DateComponent } from './date/date.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Helloworld2Component,
    DateComponent
  ],
  imports: [
    BrowserModule,
    MymoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
