import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button *ngIf="!value">{{value}}</button>
      <button backgroundColor="green" *ngIf="value == 'X'">{{ value }}</button>
      <button backgroundColor="cyan" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
//this is a 'Dumb' component, because it can't modify its own state; it can only be changed by the parent
export class SquareComponent {

  @Input()
  value!: 'X' | 'O';

}
