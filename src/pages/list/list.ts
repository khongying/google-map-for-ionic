import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @ViewChild('map') mapRef: ElementRef;
  map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    const options = {
      center: location,
      zoom: 10,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: { lat: 13.745505, lng: 100.534622},
      destination: {lat: 13.9157782, lng: 100.6433113},
      travelMode: 'DRIVING'
    },function(response, status) {
      if(status === 'OK'){
        directionsDisplay.setDirections(response);
      } else{
        window.alert('Directions request failed due to ' + status)
      }
      
    });

  }

}
