import { FractalService } from './../core/service/fractal.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-fractal',
  templateUrl: './fractal.component.html'
})
export class FractalComponent implements OnInit, AfterViewInit {

  private context: CanvasRenderingContext2D | null = null;

  private fractal$ = this.fractalService.getFractal();

  public width: number = window.innerWidth;

  public height: number = window.innerHeight;

  constructor(
    private fractalService: FractalService,
    private elementRef: ElementRef
  ) {
    this.fractal$.subscribe(fractal => {
      if (fractal && this.context) fractal.draw(this.context)
    })
  }

  ngOnInit(): void {
    this.width = this.elementRef?.nativeElement?.offsetWidth;
    this.height = this.elementRef?.nativeElement?.offsetHeight;
  }

  ngAfterViewInit(): void {
    this.context = this.elementRef?.nativeElement?.firstChild?.transferControlToOffscreen()?.getContext('2d');
    this.fractalService.createFractal(this.width, this.height);
  }
}
