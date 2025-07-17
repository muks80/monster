import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-svg',
  templateUrl: './store-svg.component.html',
})
export class StoreSvgComponent {
  @Input() customStyles = '';
}
