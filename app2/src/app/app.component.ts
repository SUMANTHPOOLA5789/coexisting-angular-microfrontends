import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'app2';
  receivedData: any;
  version = '8.1.0'
  

  ngOnInit(): void {
    let app1Data = localStorage.getItem('app1');
    if(app1Data != null)
      this.receivedData = app1Data; 
  }

  ngOnDestroy(): void {
    localStorage.removeItem('app1');
  }

  

}
