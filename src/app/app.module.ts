import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BellSvgComponent } from './components/svgs/bell-svg/bell-svg.component';
import { MoonSvgComponent } from './components/svgs/moon-svg/moon-svg.component';
import { StoreSvgComponent } from './components/svgs/store-svg/store-svg.component';
import { TruckSvgComponent } from './components/svgs/truck-svg/truck-svg.component';
import { PenNibSvgComponent } from './components/svgs/pen-nib-svg/pen-nib-svg.component';
import { ChartMixedSvgComponent } from './components/svgs/chart-mixed-svg/chart-mixed-svg.component';
import { MessagesSvgComponent } from './components/svgs/messages-svg/messages-svg.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarSvgComponent } from './components/svgs/star-svg/star-svg.component';
import { EyeSvgComponent } from './components/svgs/eye-svg/eye-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BellSvgComponent,
    MoonSvgComponent,
    StoreSvgComponent,
    TruckSvgComponent,
    PenNibSvgComponent,
    ChartMixedSvgComponent,
    MessagesSvgComponent,
    StarSvgComponent,
    EyeSvgComponent,
    StarSvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgClass, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
