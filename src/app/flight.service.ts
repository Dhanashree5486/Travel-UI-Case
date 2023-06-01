import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  getAllData(){

    return [
      { imageUrl: 'assets/f1.webp',title: 'Pune   ------------------ o ------------------   Delhi', content: 'INDIGO', content2: 'RS. 3000/-', content3: '4 hrs 28 mins'},
      { imageUrl: 'assets/f3.jpg',title: 'Chennai   ------------------ o ------------------   Sikkim', content: 'AIR INDIA', content2: 'RS. 7000/-', content3: '7 hrs 58 mins'},
      { imageUrl: 'assets/f4.jfif',title: 'Mumbai   ------------------ o ------------------   Punjab', content: 'SPICEJET', content2: 'RS. 9000/-', content3: '9 hrs 8 mins'},
      { imageUrl: 'assets/f2.webp',title: 'Banglore   ------------------ o ------------------   Madhya Pradesh', content: 'GO FIRST', content2: 'RS. 5000/-', content3: '6 hrs 48 mins'},
      { imageUrl: 'assets/f1.webp',title: 'Banglore   ------------------ o ------------------   Delhi', content: 'INDIGO', content2: 'RS. 8000/-', content3: '10 hrs 38 mins'},
      { imageUrl: 'assets/f3.jpg',title: 'Mumbai   ------------------ o ------------------   Sikkim', content: 'AIR INDIA', content2: 'RS. 6000/-', content3: '8 hrs 28 mins'},
      { imageUrl: 'assets/f4.jfif',title: 'Pune   ------------------ o ------------------   Punjab', content: 'SPICEJET', content2: 'RS. 1200/-', content3: '4 hrs 18 mins'},
      { imageUrl: 'assets/f2.webp',title: 'Chennai   ------------------ o ------------------   Madhya Pradesh', content: 'GO FIRST', content2: 'RS. 10000/-', content3: '9 hrs 28 mins'},



    ]
  }
}
