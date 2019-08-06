import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  ngAfterViewInit() {
    this.message=this.child.message;
  }

  constructor() { }
  @ViewChild(ChildComponent,{static:false}) child;
  message:string;

  ngOnInit() {
  }

}
