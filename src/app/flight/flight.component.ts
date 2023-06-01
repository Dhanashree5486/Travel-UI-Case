import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import * as flightData from 'flight.json';

interface Flight {
  location: String;
  imageUrl: String;
  title: String;
  content: String;
  content2: String;
  content3: String;
}


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  filterName: string = '';

  flights: Flight[]= flightData;

  allData: any = [];
  constructor(private api: FlightService) {
    this.allData= this.api.getAllData();
  }


    ngOnInit() {
      this.api.getAllData;

    }


}
