import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-svg',
  templateUrl: './eye-svg.component.html',
})
export class EyeSvgComponent {
  @Input() customStyles = '';
}
