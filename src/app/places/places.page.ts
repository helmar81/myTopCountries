
import {AfterViewInit, Component, OnInit, Input, ElementRef, NgZone, ViewChild } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

import { Events, IonContent, NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage  {

  @ViewChild('Map', {static: true}) mapElement: ElementRef;
  Map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyDVvB6crLwc_L8gyQ0A9ka7wBB2cRWGMjo'; /*Your API Key*/

constructor(public zone: NgZone, public geolocation: Geolocation) {
  /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }
    document.head.appendChild(script);
    /*Get Current location*/
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 8,
        mapTypeControl: false
    };
    setTimeout(() => {
        this.Map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.Map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
}

}
