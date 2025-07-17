import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-mixed-svg',
  templateUrl: './chart-mixed-svg.component.html',
})
export class ChartMixedSvgComponent {
  @Input({ required: true }) customStyles = '';
}
