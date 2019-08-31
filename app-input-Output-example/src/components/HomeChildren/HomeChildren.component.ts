import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-HomeChildren',
  templateUrl: './HomeChildren.component.html',
  styleUrls: ['./HomeChildren.component.css']
})
export class HomeChildrenComponent implements OnInit {

  constructor() { }

  @Input() searchText;
  ngOnInit() {
  }

}
