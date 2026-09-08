import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Figura } from './figura/figura';
import { MovimientoComponent } from './movimiento/movimiento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Figura, MovimientoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hackathon');
}