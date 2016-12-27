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
    this.apiKey = 'HRNAvvsMQadYjxUFr0A11Ol1ZloR10SA';
    this.codllyUrl = 'https://api.mlab.com/api/1/databases/happycode_app/collections/happycode';
  }

  getCodlly(){
    return this.http.get(this.codllyUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }
}