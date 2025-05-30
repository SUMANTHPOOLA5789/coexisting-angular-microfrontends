import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

  isActive(path: string): boolean {
    return window.location.pathname.startsWith(path);
  }

}
