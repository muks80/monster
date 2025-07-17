import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-svg',
  templateUrl: './moon-svg.component.html',
})
export class MoonSvgComponent {
  @Input({ required: true }) customStyles = '';
}
