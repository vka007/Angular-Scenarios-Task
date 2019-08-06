import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit,AfterViewInit {
  ngAfterViewInit() {
this.message=this.parent.message;
    
  }
  @ViewChild(ParentComponent,{static:false}) parent;
  message:string;

  constructor() { }

  ngOnInit() {
  }

}
