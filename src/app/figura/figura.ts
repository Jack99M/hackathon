import { Component } from '@angular/core';
import { StageComponent, CoreShapeComponent } from 'ng2-konva';
import { StageConfig } from 'konva/lib/Stage';
import { LineConfig } from 'konva/lib/shapes/Line';

@Component({
  selector: 'app-figura',
  standalone: true,
  imports: [StageComponent, CoreShapeComponent],
  templateUrl: './figura.html',
  styleUrl: './figura.scss'
})
export class Figura {

  escala = 1;

  configStage: StageConfig = {
    width: 600,
    height: 400
  };

  configCaraSuperior: LineConfig = {
    points: [200, 150, 300, 100, 400, 150, 300, 200],
    closed: true,
    fill: '#7ec8ff',
    stroke: '#004a8f',
    strokeWidth: 2
  };

  configCaraFrontal: LineConfig = {
    points: [200, 150, 300, 200, 300, 300, 200, 250],
    closed: true,
    fill: '#3ba0ff',
    stroke: '#004a8f',
    strokeWidth: 2
  };

  configCaraLateral: LineConfig = {
    points: [300, 200, 400, 150, 400, 250, 300, 300],
    closed: true,
    fill: '#1c6fb8',
    stroke: '#004a8f',
    strokeWidth: 2
  };

  agrandar() {
    this.escala += 0.1;
    this.actualizarFigura();
  }

  achicar() {
    if (this.escala > 0.3) {
      this.escala -= 0.1;
      this.actualizarFigura();
    }
  }

  actualizarFigura() {

    const s = this.escala;

    this.configCaraSuperior = {
      ...this.configCaraSuperior,
      points: [
        200, 150,
        200 + 100 * s, 150 - 50 * s,
        200 + 200 * s, 150,
        200 + 100 * s, 150 + 50 * s
      ]
    };

    this.configCaraFrontal = {
      ...this.configCaraFrontal,
      points: [
        200, 150,
        200 + 100 * s, 150 + 50 * s,
        200 + 100 * s, 150 + 150 * s,
        200, 150 + 100 * s
      ]
    };

    this.configCaraLateral = {
      ...this.configCaraLateral,
      points: [
        200 + 100 * s, 150 + 50 * s,
        200 + 200 * s, 150,
        200 + 200 * s, 150 + 100 * s,
        200 + 100 * s, 150 + 150 * s
      ]
    };
  }
}
