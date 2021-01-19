import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private storage: Storage, private navCtrl: NavController) {
    
    storage.get('onboard').then((val) => {
      if(!val){
        navCtrl.navigateRoot('/onboard');
      }
      else{
        storage.get('start').then(() => {
          navCtrl.navigateRoot('/start');
        })
      }
    })
  }

}
