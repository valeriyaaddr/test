import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {

  @Input() public mode: string;
  @Output() public onClick = new EventEmitter();

  constructor() { }

}
