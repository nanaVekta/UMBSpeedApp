import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {

  slideOpts = {
    initialSlide: 0
  }

  @ViewChild('mySlider') slides: IonSlides;

  constructor(private storage: Storage, private navCtrl: NavController) { }
  

  ngOnInit() {
  }

  swipeNext(){
    this.slides.slideNext();
  }

  continueToNext(){
    this.storage.set('onboard', 'onboarded')
    .then(()=>{
      this.navCtrl.navigateRoot('/start');
    })

  }
}
