import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss']
})
export class FactCardComponent {

  @Input() text: string;

  constructor() { }

}
