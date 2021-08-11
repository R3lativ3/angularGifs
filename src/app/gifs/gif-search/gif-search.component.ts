import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styles: [
  ]
})
export class GifSearchComponent {

  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>;

  constructor(private servicio: GifsService){

  }

  buscar(){
    let id = this.txtBuscar.nativeElement.value;
    this.servicio.buscarGifs(id);
    this.txtBuscar.nativeElement.value = '';
  }
}
