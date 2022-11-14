import { Fractal } from './../core/model/fractal';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fractal',
  templateUrl: './fractal.component.html',
  styleUrls: ['./fractal.component.scss']
})
export class FractalComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvas: ElementRef | null = null;

  @Input() lineWidth: number = 10;
  @Input() sides: number = 3;
  @Input() scale: number = 0.5;
  @Input() spread: number = 1;
  @Input() color: string = 'hsl(' + Math.random()*360 + ', 100%, 50%)';

  private context: CanvasRenderingContext2D | null = null;

  public width: number = window.innerWidth;

  public height: number = window.innerHeight;

  constructor() { }

  ngAfterViewInit(): void {
    this.context = this.canvas?.nativeElement.transferControlToOffscreen().getContext('2d');
    if (this.context) {
      new Fractal(this.width, this.height).draw(this.context)
    }
  }

}
