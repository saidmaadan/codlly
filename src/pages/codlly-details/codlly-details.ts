import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CodllyService } from '../../app/services/codlly.service';

@Component({
  selector: 'codlly-details',
  templateUrl: 'codlly-details.html'
})
export class CodllyDetailsPage {
  public coding:any;
  public result:any;
  constructor(public navCtrl: NavController, public params:NavParams, cs:CodllyService) {
    this.coding = params.get('coding');
  }

}
