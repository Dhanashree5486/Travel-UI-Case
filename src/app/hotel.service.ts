import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  getAllData(){

    return [
      { imageUrl: 'assets/h3.avif', title: 'Taj Fort Aguda Resort & Spa Candolin, Goa', content: 'Near Railway Station, Shirdi', content2: '25% off   $200', content3: 'Parking, Atached Bathrooms, CCTV Cameras, Wifi' },
      { imageUrl: 'assets/h1.webp', title: 'Marriott Bonvoy Hotels, Goa', content: 'Near Railway Station, Shirdi', content2: '25% off   $200', content3: 'Parking, Atached Bathrooms, CCTV Cameras, Wifi' },
      { imageUrl: 'assets/h2.jfif', title: 'InterContinential Resort & Spa Candolin, Goa', content: 'Near Railway Station, Shirdi', content2: '25% off   $200', content3: 'Parking, Atached Bathrooms, CCTV Cameras, Wifi' },
      { imageUrl: 'assets/h4.jfif', title: 'Shangri-La Hotels & Resort, Goa', content: 'Near Railway Station, Shirdi', content2: '25% off   $200', content3: 'Parking, Atached Bathrooms, CCTV Cameras, Wifi' },


    ]
  }
}
