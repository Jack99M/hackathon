import { Component } from '@angular/core';

@Component({
  selector: 'app-tamanio',
  standalone: true,
  templateUrl: './tamanio.html',
  styleUrl: './tamanio.scss'
})
export class Tamanio {

  agrandar() {
    console.log('Agrandar');
  }

  achicar() {
    console.log('Achicar');
  }

}
