import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',

  template: `
  <h2>
      Welcome {{name}}!
  </h2>
  <input type="text" value="Vineet">
  <input [id]="myId" type="text" value="Vineet">
  <input [disabled]="isDisabled" id="{{myId}}" type = "text" value="Vineet"> 

  <h2 class="text-success">StackRoute</h2>
  <h2 [class]="successClass">StackRoute</h2>

  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
  `,
  styles: [`
    .text-success {color:green;}
    .text-danger { color:red;}
    .text-special {font-style:italic;}
  `]
})
export class TestComponent implements OnInit {

  public name = "Vineet";
  public myId = "testId";
  public isDisabled = true;
  //public siteUrl = window.location.href;

  public successClass = "text-success";
  public greeting = "";

  
  constructor() { }

  ngOnInit() {
  }

  greetUser()
  {
    return "Hello " + this.name;
  }

  onClick(event)
  {
    console.log(event);
    this.greeting = 'Welcome to StackRoute';
  }
}
