import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {

  @Input() mode: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

}
