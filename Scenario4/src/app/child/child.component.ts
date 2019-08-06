import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    this.childEvent.emit('Hey vineet');
  }

}
