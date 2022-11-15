import { FractalService } from './../../core/service/fractal.service';
import { map } from 'rxjs';
import { FractalState } from './../../core/model/fractal-state';
import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  public state$ = this.fractalService.getFractal().pipe(
    map(fractal => <FractalState> {
      lineWidth: fractal?.lineWidth ?? 10,
      sides: fractal?.sides ?? 3,
      scale: fractal?.scale ?? 0.5,
      angle: Math.floor((fractal?.angle ?? 1) * 180 / Math.PI),
      deept: fractal?.maxDeept ?? 4,
      branches: fractal?.branches ?? 2,
      color: fractal?.color ?? 'gold',
    })
  );

  constructor(
    private fractalService: FractalService
  ) { }

  randomize(): void {
    this.fractalService.generateRandomFractal();
  }

  setSides(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setSides(newValue);
    }
  }

  setLineWidth(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setLineWidth(newValue);
    }
  }

  setScale(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setScale(newValue);
    }
  }

  setAngle(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setAngle((newValue - 1) * Math.PI / 180);
    }
  }

  setMaxDeept(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setMaxDeept(newValue);
    }
  }

  setBranches(target: EventTarget | null): void {
    let newValue = Number((target as HTMLInputElement).value);
    if (newValue) {
      this.fractalService.setBranches(newValue);
    }
  }
}
