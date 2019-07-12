import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextinputComponent } from './textinput/textinput.component';

import { from } from 'rxjs';
import {FormsModule} from '@angular/forms'//for ngModel

@NgModule({
  declarations: [TextinputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TextinputComponent
  ]
})
export class MymoduleModule { }
