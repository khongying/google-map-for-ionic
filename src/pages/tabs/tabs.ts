import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ListPage } from '../list/list';
import { PagetwoPage } from '../pagetwo/pagetwo';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = HomePage;
  	this.tab2 = ListPage;
  	this.tab3 = PagetwoPage;
  	this.tab4 = AccountPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
