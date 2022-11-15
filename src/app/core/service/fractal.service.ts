import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fractal } from '../model/fractal';

@Injectable({
  providedIn: 'root'
})
export class FractalService {

  private fractal$ = new BehaviorSubject<Fractal | null>(null);

  constructor() { }

  createFractal(width: number, height: number): void {
    this.fractal$.next(new Fractal(width, height));
  }

  getFractal(): Observable<Fractal | null> {
    return this.fractal$.asObservable();
  }

  generateRandomFractal(): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.lineWidth = Math.floor(Math.random() * 50 + 1);
      fractal.sides = Math.floor(Math.random() * 9 + 1);
      fractal.scale = (Math.random() * 0.2 + 0.4);
      fractal.angle = (Math.random() * 3.1 + 0);
      fractal.color = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';
      fractal.maxDeept = 4;
      fractal.branches = 2;
      this.fractal$.next(fractal);
    }
  }

  setSides(sides: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.sides = sides;
      this.fractal$.next(fractal);
    }
  }

  setLineWidth(lineWidth: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.lineWidth = lineWidth;
      this.fractal$.next(fractal);
    }
  }

  setScale(scale: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.scale = scale;
      this.fractal$.next(fractal);
    }
  }

  setAngle(angle: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.angle = angle;
      this.fractal$.next(fractal);
    }
  }

  setMaxDeept(maxDeept: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.maxDeept = maxDeept;
      this.fractal$.next(fractal);
    }
  }

  setBranches(branches: number): void {
    let fractal = this.fractal$.value;
    if (fractal) {
      fractal.branches = branches;
      this.fractal$.next(fractal);
    }
  }
}
