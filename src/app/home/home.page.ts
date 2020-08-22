import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';







@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  public today: number 	= Date.now();
  slides: any;


  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

}
