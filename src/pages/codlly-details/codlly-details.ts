import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CodllyService } from '../../app/services/codlly.service';
import { CodllyPage } from '../codlly/codlly';

@Component({
  selector: 'codlly-details',
  templateUrl: 'codlly-details.html'
})
export class CodllyDetailsPage {
  public coding:any;
  public result:any;

  constructor(public navCtrl: NavController, public params:NavParams, private cs:CodllyService) {
    this.coding = params.get('coding');
  }

  deleteAct(codingId){
    this.cs.deleteAct(codingId).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(CodllyPage);
  }

}
