import { Component, computed, input, signal } from '@angular/core';
import { StageComponent, CoreShapeComponent } from 'ng2-konva';
import { StageConfig } from 'konva/lib/Stage';
import { LineConfig } from 'konva/lib/shapes/Line';

@Component({
  selector: 'app-figura',
  imports: [StageComponent, CoreShapeComponent],
  templateUrl: './figura.html',
  styleUrl: './figura.scss'
})
export class Figura {

  readonly matrix = input<number[]>([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  readonly escala = signal(1);

  readonly configStage: StageConfig = {
    width: 600,
    height: 400
  };

  readonly configCaraSuperior = computed(() =>
    this.createLineConfig([200, 150, 300, 100, 400, 150, 300, 200], '#7ec8ff'),
  );

  readonly configCaraFrontal = computed(() =>
    this.createLineConfig([200, 150, 300, 200, 300, 300, 200, 250], '#3ba0ff'),
  );

  readonly configCaraLateral = computed(() =>
    this.createLineConfig([300, 200, 400, 150, 400, 250, 300, 300], '#1c6fb8'),
  );

  agrandar() {
    this.escala.update((value) => value + 0.1);
  }

  achicar() {
    this.escala.update((value) => (value > 0.3 ? value - 0.1 : value));
  }

  private createLineConfig(points: number[], fill: string): LineConfig {
    return {
      points: this.transformPoints(points),
      closed: true,
      fill,
      stroke: '#004a8f',
      strokeWidth: 2,
    };
  }

  private transformPoints(points: number[]): number[] {
    const matrix = this.matrix();
    const centerX = 300;
    const centerY = 200;
    const scale = this.escala();
    const transformed: number[] = [];

    for (let index = 0; index < points.length; index += 2) {
      const x = (points[index] - centerX) * scale;
      const y = (points[index + 1] - centerY) * scale;
      transformed.push(
        matrix[0] * x + matrix[3] * y + matrix[6] + centerX,
        matrix[1] * x + matrix[4] * y + matrix[7] + centerY,
      );
    }

    return transformed;
  }
}