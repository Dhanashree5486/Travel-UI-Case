import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() title: string = '';
  @Input() content!: string;
  @Input() content2!: string;
  @Input() content3!: string;

  constructor() {
    this.content = '';
  }
  handleButtonClick() {
    // Add your button click logic here
    console.log('Button clicked!');
  }
}
