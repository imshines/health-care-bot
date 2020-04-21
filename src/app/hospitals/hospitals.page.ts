import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})

export class HospitalsPage implements OnInit {
  
  map: any;

  constructor() { }
  
  ionViewDidEnter(){
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }
  ngOnInit() {
  }

}
