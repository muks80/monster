import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bell-svg',
  templateUrl: './bell-svg.component.html',
})
export class BellSvgComponent {
  @Input({ required: true }) customStyles = '';
}
