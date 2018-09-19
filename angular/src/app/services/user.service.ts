import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Config } from './../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  serviceUrl: string;
  company: any;
  admin: any;
  user: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl;
  }
  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  setHeaderWithAuthorization() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   // headers.append('token','c4921d34e42a2aabc7925da36fe0acf2');
    return (headers);
  }

  // ---------------------------------Start-------------------------------------------
  // Function      : getType
  // Params        : 
  // Returns       : 
  // Author        : Yasir Poongadan
  // Date          : 04-09-2018
  // Last Modified : 24-09-2018, Yasir Poongadan
  // Desc          : 
  
  // ----------------------------------End-------------------------------------------
  pushMessage(msg){
 
    let headers = this.setHeaderWithAuthorization();
    console.log(this.serviceUrl);
    console.log(msg);
    return this.http.post('/pushMessage',{msg:msg},{headers: headers})
      .map(res => res.json());
  }
  

}
