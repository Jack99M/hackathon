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
  configStage: StageConfig = {
    width: 600,
    height: 400
  };

  // Cara superior (top) — paralelogramo
  configCaraSuperior: LineConfig = {
    points: [200, 150, 300, 100, 400, 150, 300, 200],
    closed: true,
    fill: '#7ec8ff',
    stroke: '#004a8f',
    strokeWidth: 2
  };

  // Cara frontal (front) — cuadrado/rectángulo
  configCaraFrontal: LineConfig = {
    points: [200, 150, 300, 200, 300, 300, 200, 250],
    closed: true,
    fill: '#3ba0ff',
    stroke: '#004a8f',
    strokeWidth: 2
  };

  // Cara lateral (side) — paralelogramo
  configCaraLateral: LineConfig = {
    points: [300, 200, 400, 150, 400, 250, 300, 300],
    closed: true,
    fill: '#1c6fb8',
    stroke: '#004a8f',
    strokeWidth: 2
  };
}