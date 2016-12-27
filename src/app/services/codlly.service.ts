import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CodllyService{
  http:any;
  apiKey: String;
  codllyUrl: String;

  constructor(http:Http){
    this.http = http;
    this.apiKey = 'bzEs24WQhh5UA6orndrXq72QX80kLfCq';
    this.codllyUrl = 'https://api.mlab.com/api/1/databases/happycode/collections/happycodes';

  }
  getCodlly(){
    return this.http.get(this.codllyUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }
}