import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the DetailphonePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/detailphone/detailphone.html',
})
export class DetailphonePage {
  selectedItem: any;
  index : any;
  phones : Array<any>;

  constructor(private navCtrl: NavController, navParams: NavParams ,private alertController: AlertController,public menu: MenuController) {
    this.index = navParams.get('index');
    this.phones = navParams.get('phones');
    this.selectedItem = this.phones[this.index];
  }

private swipeEvent($event): void {
    if(this.index<this.phones.length-1 && $event.direction ==2){     
      this.index = this.index+1;    
      this.selectedItem  = this.phones[this.index];   
    }
    else if (this.index>0 && $event.direction ==4){
            this.index = this.index-1;    
            this.selectedItem  = this.phones[this.index];   
    }
  }


  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}

  // console.log('Swipe',$event.direction);
  // console.log('index', this.index);