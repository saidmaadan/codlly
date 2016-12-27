import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CodllyService } from '../../app/services/codlly.service';
import { CodllyPage } from '../codlly/codlly';

@Component({
  selector: 'add-codlly',
  templateUrl: 'add-codlly.html'
})
export class AddCodllyPage {
  public name: String;
  public note: String
  public language: String;
  public result: any;

  constructor(public navCtrl: NavController, private cs:CodllyService) {
    
  }

  onSubmit(){
    var coding = {
      name: this.name,
      note: this.note,
      language: this.language
    }

    //add daily coding activities
    this.cs.addCodlly(coding).subscribe(data =>{
      this.result = data;
    });

    this.navCtrl.push(CodllyPage);
  }

}
