import { Component, SimpleChanges } from '@angular/core';

import {
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  title = 'lifecycle';
  data: number = 10;

  constructor() {
    console.log("constructor");
  }

  // This Life Cycle hooks initialised when angular finishes initialising the Component. 
  //This hook calls after nOnChange hook
  ngOnInit() {
    console.log("Oninit");
  }

  // This lifecycle hooks calls after the constructor initialization.
  // This lifecycle hooks will be called when there is an input variable got change.
  // will be called if the Input value from a parent component got changed. 
  // This hook is  have a change map object (SimpleChanges) as parameter which is having - currentValue, previousValue and firstChange properties for better handling
  ngOnChanges(changes:SimpleChanges) {
    console.log("OnChanges");
  }

  // This hook will called whenever an input property in the Component got change
  // We can use this hook to make our custom logics for any of the component property changes
  ngDoCheck() {
    console.log("DoCheck");
  }

  // This hook will be callled when angular perform a content projection
  // This hook will be called when all the bindings of a component need to be checked for the first time
  // This hook calls after the first DoCheck hook
  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  // This hook will be called everytime the content of a component has been checked by the change detection
  //This method calls after NgContentInit and also on every subsequent initialization of ngDoCheck
  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  // This hook will execute after the component's view has been fully initialized
  //This method initialized after angular initialized the component's and child component's view
  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

// This method called after ngAfterViewInit
//It execute everytime the view of a component has been checked by the change detection algorithm of angular.
// Calls after ngAfterViewInit and also on every subsequen initialization of ngDoCheck
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
//This method will be executed just before Angular destroys the components. 
//This method is very useful for unsubscribing from the observables and detaching the event handlers to avoid memory leaks.
// Actually, it is called just before the instance of the component is finally destroyed
  ngOnDestroy() {
    console.log("OnDestroy");
  }

  addNumber() {
    this.data += 10;
  }

  subNumber() {
    this.data -= 10;
  }


}
