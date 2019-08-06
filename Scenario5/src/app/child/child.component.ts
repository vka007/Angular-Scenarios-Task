import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  template: `<button (click)= "fireEvent()"> Send event </button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent()
  {
    this.childEvent.emit('Hey vineet! child message');
  }


}
