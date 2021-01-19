import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public paymentType : any;
  public cashOnDev : number;
  public momoClass : string;
  public cashClass : string;
  public disableBtn : Boolean;

  constructor() { }

  ngOnInit() {
  }

  addClass(type){
    this.paymentType = type;
    if(type == 'momo'){
      this.momoClass = 'payment';
      this.cashClass = null;
      this.disableBtn = false;
    }
    else{
      this.momoClass = null;
      this.cashClass = 'payment';
      this.disableBtn = false;

    }
  }
}
