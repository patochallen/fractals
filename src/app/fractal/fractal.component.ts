import { FractalService } from './../core/service/fractal.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-fractal',
  templateUrl: './fractal.component.html'
})
export class FractalComponent implements OnInit, AfterViewInit {

  public width: number = window.innerWidth;

  public height: number = window.innerHeight;

  constructor(
    private fractalService: FractalService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.width = this.elementRef?.nativeElement?.offsetWidth;
    this.height = this.elementRef?.nativeElement?.offsetHeight;
    this.fractalService.createFractal(this.width, this.height);
  }

  ngAfterViewInit(): void {
    const context = this.elementRef?.nativeElement?.firstChild?.transferControlToOffscreen()?.getContext('2d');
    this.fractalService.getFractal().subscribe(fractal => fractal?.draw(context))
  }
}
