import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lado',
    template: `
    <div>
        <p> hola soy un parrafo del componente lado</p>
    </div> `
})

export class LadoComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
