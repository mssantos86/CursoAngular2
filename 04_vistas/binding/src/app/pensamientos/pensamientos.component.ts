import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  sPensamiento: string;
  aPensamientos: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aPensamientos = [];
  }

  addPensamiento() {
    this.aPensamientos.push(this.sPensamiento);
    this.sPensamiento = '';
  }

}
