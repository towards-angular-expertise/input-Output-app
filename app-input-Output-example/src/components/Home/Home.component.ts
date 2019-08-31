import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  sendData="Data geliyor";
  constructor() { }

  
  ngOnInit() {
  }

}
