import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent implements OnInit {
    message = "hello";
    constructor() {

    }

    ngOnInit() {
    }
    myfn() {
        return document.getElementsByName('name').length;
    }
}
