import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Figura } from './figura/figura';
import {
  MovimientoChange,
  MovimientoComponent,
} from './movimiento/movimiento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Figura, MovimientoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hackathon');
  protected readonly matrix = signal<number[]>([1, 0, 0, 0, 1, 0, 0, 0, 1]);

  protected ontransformchange(change: MovimientoChange): void {
    this.matrix.set(change.matrix);
  }
}