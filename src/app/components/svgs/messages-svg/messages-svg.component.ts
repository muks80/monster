import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages-svg',
  templateUrl: './messages-svg.component.html',
  styles: [],
})
export class MessagesSvgComponent {
  @Input() customStyles = '';
}
