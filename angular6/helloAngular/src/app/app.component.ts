import { Component } from '@angular/core';

@Component({//defines metadata and properties of the module
  selector: 'Myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'helloAngular';
}
