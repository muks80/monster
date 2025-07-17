import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages-svg',
  templateUrl: './messages-svg.component.html',
})
export class MessagesSvgComponent {
  @Input({ required: true }) customStyles = '';
}
