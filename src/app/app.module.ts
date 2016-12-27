import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CodllyPage } from '../pages/codlly/codlly';
import { AddCodllyPage } from '../pages/add-codlly/add-codlly';
import { CodllyDetailsPage } from '../pages/codlly-details/codlly-details';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CodllyPage,
    AddCodllyPage,
    CodllyDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddCodllyPage,
    CodllyDetailsPage,
    CodllyPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
