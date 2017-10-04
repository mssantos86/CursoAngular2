import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  claveLibros: string;
  aLibros: string[];

  constructor(private buscarService: BuscarService) { }

  ngOnInit() {
  }

  buscarLibro() {
    this.aLibros = this.buscarService.getLibros(this.claveLibros);
    console.log(this.claveLibros);
  }
}
