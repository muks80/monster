import { Component } from '@angular/core';
import { StoreSvgComponent } from '../svgs/store-svg/store-svg.component';
import { TruckSvgComponent } from '../svgs/truck-svg/truck-svg.component';
import { PenNibSvgComponent } from '../svgs/pen-nib-svg/pen-nib-svg.component';
import { ChartMixedSvgComponent } from '../svgs/chart-mixed-svg/chart-mixed-svg.component';
import { MessagesSvgComponent } from '../svgs/messages-svg/messages-svg.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  footerItems = [
    {
      iconComponent: StoreSvgComponent,
      iconStyles: 'w-5 h-5 fill-green-600',
      barStyles: 'w-16 h-3.5 bg-green-100',
    },
    {
      iconComponent: TruckSvgComponent,
      iconStyles: 'w-5 h-5 fill-gray-600',
      barStyles: 'w-16 h-3.5 bg-gray-200',
    },
    {
      iconComponent: PenNibSvgComponent,
      iconStyles: 'w-5 h-5 fill-gray-600',
      barStyles: 'w-16 h-3.5 bg-gray-200',
    },
    {
      iconComponent: ChartMixedSvgComponent,
      iconStyles: 'w-5 h-5 fill-gray-600',
      barStyles: 'w-12 h-3.5 bg-gray-200',
    },
    {
      iconComponent: MessagesSvgComponent,
      iconStyles: 'w-5 h-5 fill-gray-600',
      barStyles: 'w-8 h-3.5 bg-gray-200',
    },
  ];
}
