import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

aNombres: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aNombres = ['Pepe', 'Manolo', 'Jose'];
  }

}
