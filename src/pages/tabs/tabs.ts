import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { AddCodllyPage } from '../add-codlly/add-codlly';
import { CodllyPage } from '../codlly/codlly';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CodllyPage;
  tab3Root: any = AddCodllyPage;
  tab2Root: any = AboutPage;
  

  constructor() {

  }
}
