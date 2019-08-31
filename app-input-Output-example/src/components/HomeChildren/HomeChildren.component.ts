import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-HomeChildren',
  templateUrl: './HomeChildren.component.html',
  styleUrls: ['./HomeChildren.component.css']
})
export class HomeChildrenComponent implements OnInit {

  constructor() { }

  @Input() searchText;
  @Output() inText = new EventEmitter();
  Count=0;
  ngOnInit() {
    this.inText.emit(this.Count);
  }

}
