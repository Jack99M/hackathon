import { DecimalPipe } from '@angular/common';
import { Component, computed, output, signal } from '@angular/core';
import { mat3 } from 'gl-matrix';

export interface MovimientoState {
  translatex: number;
  translatey: number;
  rotation: number;
  reflectx: boolean;
  reflecty: boolean;
}

export interface MovimientoChange extends MovimientoState {
  matrix: number[];
}

@Component({
  selector: 'app-movimiento',
  imports: [DecimalPipe],
  templateUrl: './movimiento.html',
  styleUrl: './movimiento.scss',
})
export class MovimientoComponent {
  readonly translatex = signal(0);
  readonly translatey = signal(0);
  readonly rotation = signal(0);
  readonly reflectx = signal(false);
  readonly reflecty = signal(false);
  readonly transformchange = output<MovimientoChange>();

  readonly matrix = computed(() => {
    const translation = mat3.fromTranslation(mat3.create(), [
      this.translatex(),
      this.translatey(),
    ]);
    const rotation = mat3.fromRotation(
      mat3.create(),
      (this.rotation() * Math.PI) / 180,
    );
    const scaling = mat3.fromScaling(mat3.create(), [
      this.reflectx() ? -1 : 1,
      this.reflecty() ? -1 : 1,
    ]);
    const result = mat3.create();

    mat3.multiply(result, translation, rotation);
    mat3.multiply(result, result, scaling);

    return Array.from(result);
  });

  ontranslatexchange(value: string): void {
    this.translatex.set(Number(value));
    this.emittransformchange();
  }

  ontranslateychange(value: string): void {
    this.translatey.set(Number(value));
    this.emittransformchange();
  }

  onrotationchange(value: string): void {
    this.rotation.set(Number(value));
    this.emittransformchange();
  }

  togglereflectionx(): void {
    this.reflectx.update((value) => !value);
    this.emittransformchange();
  }

  togglereflectiony(): void {
    this.reflecty.update((value) => !value);
    this.emittransformchange();
  }

  resetmovement(): void {
    this.translatex.set(0);
    this.translatey.set(0);
    this.rotation.set(0);
    this.reflectx.set(false);
    this.reflecty.set(false);
    this.emittransformchange();
  }

  private emittransformchange(): void {
    this.transformchange.emit({
      translatex: this.translatex(),
      translatey: this.translatey(),
      rotation: this.rotation(),
      reflectx: this.reflectx(),
      reflecty: this.reflecty(),
      matrix: this.matrix(),
    });
  }
}