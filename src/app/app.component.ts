import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode = 'random';

  constructor() { }

  public switchMode(mode): void {
    this.mode = mode;
  }

}
