import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare const $: any;
import {Paho} from 'ng2-mqtt/mqttws31';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg = '';
  edited = false;
    constructor( private userService: UserService,public snackBar: MatSnackBar) { }

  

  ngOnInit() {
   
   
  }
  pushMessage(){
    console.log('submitted');
    console.log(this.msg);
    this.userService.pushMessage(this.msg).subscribe(resp =>{
      if(resp.status){
        this.edited = true;
        //wait 3 Seconds and hide
        setTimeout(function() {
            this.edited = false;
            //console.log(this.edited);
        }.bind(this), 2000);
      }
    });  
  }
 
}
