import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-truck-svg',
  templateUrl: './truck-svg.component.html',
  styles: [],
})
export class TruckSvgComponent {
  @Input() customStyles = '';
}
