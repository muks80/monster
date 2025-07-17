import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-truck-svg',
  templateUrl: './truck-svg.component.html',
})
export class TruckSvgComponent {
  @Input({ required: true }) customStyles = '';
}
