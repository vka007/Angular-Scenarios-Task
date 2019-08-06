import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h2>{{"From text Box : " + parentData1}}</h2>
    `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
//@Input() public parentData;

@Input() public parentData1;

  constructor() { }

  ngOnInit() {
  }

}
