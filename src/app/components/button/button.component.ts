import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public disabled?: boolean;
  @Input() public minWidth?: number;
  @Output() public onClick = new EventEmitter();

  constructor() { }

}
