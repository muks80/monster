import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pen-nib-svg',
  templateUrl: './pen-nib-svg.component.html',
  styles: [],
})
export class PenNibSvgComponent {
  @Input() customStyles = '';
}
