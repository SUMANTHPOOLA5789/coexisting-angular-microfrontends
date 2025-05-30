import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'app3-main',
  standalone:false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit,OnDestroy{
  title = 'app3';
  version = "19.2.11";
  message = '';

  receivedMsg:string = '';

  ngOnInit(): void {
    let app1Msg = localStorage.getItem('app1');
    if(app1Msg != null){
      this.receivedMsg = app1Msg;
    }
  }

  sendDataToApp1(){
    localStorage.setItem('app3',this.message);
  }

  navigateToApp1(event: MouseEvent) {
    event.preventDefault();
    navigateToUrl('/app1');
  }
  ngOnDestroy(): void {
    localStorage.removeItem('app1');
  }
}
