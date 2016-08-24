import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AproposPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/apropos/apropos.html',
  animations: [
 
    // //For the logo
    // trigger('flyInBottomSlow', [
    //   state('in', style({
    //     transform: 'translate3d(0,0,0)'
    //   })),
    //   transition('void => *', [
    //     style({transform: 'translate3d(0,2000px,0'}),
    //     animate('3500ms 500ms ease-in-out')
    //   ])
    // ]),
 
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('2000ms 0ms ease-in-out')
      ])
    ]),
 
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('4000ms 0ms ease-in-out', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),
  ]
})
export class AproposPage {

  constructor(private navCtrl: NavController) {

  }

}
