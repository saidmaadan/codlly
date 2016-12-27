import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodllyService } from '../../app/services/codlly.service';
import { CodllyDetailsPage } from '../codlly-details/codlly-details';

@Component({
  selector: 'codlly',
  templateUrl: 'codlly.html'
})
export class CodllyPage {
  codings:any;

  constructor(public navCtrl: NavController, private cs:CodllyService) {

  }

  ngOnInit(){
    this.cs.getCodlly().subscribe(data => {
      this.codings = data;
    });
  }

  ionViewWillEnter(){
    this.cs.getCodlly().subscribe(data => {
      this.codings = data;
    });
  }

  codeSelected(event, coding){
    this.navCtrl.push(CodllyDetailsPage,{
      coding:coding
    });
  }

}
