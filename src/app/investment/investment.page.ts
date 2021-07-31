import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.page.html',
  styleUrls: ['./investment.page.scss'],
})
export class InvestmentPage implements OnInit {

  constructor(private navCtrl: NavController){}

  ngOnInit(){

  }

  navigateBack(){
    this.navCtrl.navigateBack('/app/home');
  }

}
