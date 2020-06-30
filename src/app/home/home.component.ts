import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // paths for icons to be used
  icons = {
    awesomefire: 'awesome-fire',
    awesomemountain: 'awesome-mountain',
    ioniciosthermometer: 'ionic-ios-thermometer',
    metrodirectionsbike: 'metro-directions-bike'
  };

  // paths for bgs to be used
  bgs = {
    blue: 'blue',
    coral: 'coral',
    lightblue: 'lightblue',
    yellow: 'yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
