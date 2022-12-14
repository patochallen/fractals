import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FractalComponent } from './fractal/fractal.component';
import { ControlsComponent } from './fractal/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FractalComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
