import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import * as hotelData from 'hotel.json';

interface Hotel {
  location: String;
  imageUrl: String;
  title: String;
  content: String;
  content2: String;
  content3: String;
}


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {

  filterName: string = '';

hotels: Hotel[]= hotelData;


allData: any = [];
constructor(private api: HotelService) {
  this.allData= this.api.getAllData();
}


  ngOnInit() {
    this.api.getAllData;

  }



}



