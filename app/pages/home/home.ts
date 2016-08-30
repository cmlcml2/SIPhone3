import {Component} from '@angular/core';
import {NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {DetailphonePage} from '../detailphone/detailphone';



@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  phones: Array<any>;

  constructor(public navCtrl: NavController) {
    this.phones = [
      {
        "modele": "iPhone 4S",
        "type": "telephone",
        "os": "ios",
        "version": "9.2.1",
        "num": "1003143",
        "image": "https://images-na.ssl-images-amazon.com/images/I/61-k8S3VoiL._SX522_.jpg",
        "sim" : false,
        "ip" : "127.0.0.1",
        "dsn" : "10.1.1.2",
        "proxy" : "proxy.pac.js"
      },
      {
        "modele": "iPad mini",
        "type": "tablette",
        "os": "ios",
        "version" : "9.2.1",
        "num": "1270626",
        "image": "https://i5.walmartimages.com/asr/28baa67f-7a5a-48d1-a0fc-6d5305924039_1.ebdff582719ea3a94a302c79e6213250.jpeg",
        "sim" : true,
        "ip" : "127.0.0.1",
        "dsn" : "10.1.1.2",
        "proxy" : "proxy.pac.js"
      },
      {
        "modele": "Nokia Lumia 1020",
        "type": "telephone",
        "os": "windows",
        "version": "8.1",
        "num": "1270637",
        "image": "http://img.clubic.com/download/image.php?id=06697626&h=016C&w=01D4&crop=2&options=YToxOntzOjU6ImNvbG9yIjtzOjU6IndoaXRlIjt9",
        "sim" : false,
        "ip" : "127.0.0.1",
        "dsn" : "10.1.1.2",
        "proxy" : "proxy.pac.js"
      },
      {
        "modele": "Nexus 9",
        "type": "tablette",
        "os": "android",
        "version": "5.0",
        "num": "1210352",
        "image": "http://img1.lesnumeriques.com/produits/474/20917/Nexus_9_face-545393c21e546_450x400.jpg",
        "sim" : false,
        "ip" : "127.0.0.1",
        "dsn" : "10.1.1.2",
        "proxy" : "proxy.pac.js"
      },
      {
        "modele": "Huwai Ascend G620S",
        "type": "téléphone",
        "os": "android",
        "version": "6.1",
        "num": "123456",
        "image": "",
        "sim" : false,
        "ip" : "127.0.0.1",
        "dsn" : "10.1.1.2",
        "proxy" : "125.12.57.10:3138"
      },

    ];
          console.log('Images',this.phones[4].image)
   
  }
  // Navigation sur la page des détailss
  private itemTapped(index,phones): void {
    this.navCtrl.push(DetailphonePage, {
      "index" : index,
      "phones" : phones
    });
  }
}




