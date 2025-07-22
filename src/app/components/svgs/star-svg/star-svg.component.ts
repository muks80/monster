import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-svg',
  templateUrl: './star-svg.component.html',
})
export class StarSvgComponent {
  @Input() customStyles = '';
}
