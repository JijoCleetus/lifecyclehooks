import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges {

  @Input()
  val: string;

  constructor() { }
  // Calls after the parent Component's ngAfterContentChecked hook
  ngOnInit() {
    console.log("OnInit in Child Component");
  }

  // Calls after the parent Component's ngAfterContentChecked hook.
  // Calls before the ngOninit of the same component
  // Calls when value of an input property got change in the parent component.
  ngOnChanges(Changes: SimpleChanges) {
    console.log("OnChanges in Child Component", Changes);
  }

}
