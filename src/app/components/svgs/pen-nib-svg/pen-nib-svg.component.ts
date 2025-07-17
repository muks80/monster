import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pen-nib-svg',
  templateUrl: './pen-nib-svg.component.html',
})
export class PenNibSvgComponent {
  @Input({ required: true }) customStyles = '';
}
