import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodllyService } from '../../app/services/codlly.service';

@Component({
  selector: 'page-codlly',
  templateUrl: 'codlly.html'
})
export class CodllyPage {

  constructor(public navCtrl: NavController, private cs:CodllyService) {

  }

  ngOnInit(){
    this.cs.getCodlly().subscribe(codlly => {
      console.log(codlly)
    });
  }

}
