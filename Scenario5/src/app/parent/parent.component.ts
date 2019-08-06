import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public message = "";

  @Output() public parentEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
