import { Component, OnInit } from '@angular/core';
import {Provincia} from './provincias.model';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css']
})

export class ImpresoraComponent implements OnInit {

  aImpresoras: Array<string>;
  impresoraSeleccionada: string;

  resultado: boolean;
  claro: boolean;
  mostrarFinal: boolean;

  provinciaSeleccionada: Provincia;
  aProvincias: Array<Provincia>;

  constructor() { }

  avisarProvincia() {
    console.dir(this.provinciaSeleccionada.id);
    console.dir(this.provinciaSeleccionada.name);
  }

  ngOnInit() {
    this.aImpresoras = ['HP', 'CANON', 'EPSON', 'BROTHER'];
    this.aProvincias = [{id: '1', name: 'Cádiz'},
                       {id: '2', name: 'Sevilla'},
                       {id: '3', name: 'Málaga'},
                       new Provincia('4', 'Córdoba')];
  }

}
