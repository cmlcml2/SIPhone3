import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {DetailphonePage} from '../detailphone/detailphone';
import {DetailreseauPage} from '../detailreseau/detailreseau';
import {HomePage} from '../home/home';


/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  tab0Root: any ;
  tab1Root: any ;
  tab2Root: any ;

  constructor() {
    this.tab0Root = HomePage;
    this.tab1Root = DetailphonePage;
    this.tab2Root = DetailreseauPage;
  }

}
