import { Component, OnDestroy, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';


@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app1';
  version = '8.1.0'
  yoshiUrl = assetUrl("yoshi.png");

  message:string = '';

  receivedMsg:string = ''

  ngOnInit(): void {
    let app3Msg = localStorage.getItem('app3');
    if(app3Msg != null){
      this.receivedMsg = app3Msg;
    }
  }

  sendDataToApp3() {
    // const event = new CustomEvent('app1-data', {
    //   detail: { message: 'Hello from App1!' }
    // });
  
    // window.dispatchEvent(event);
    // console.log('App1: Event sent',event);
    localStorage.setItem('app1',this.message);
    
   this.resetValues();
  }

  resetValues(){
    this.message = "";
  }
  ngOnDestroy(): void {
    localStorage.removeItem('app3');
  }
  


}
