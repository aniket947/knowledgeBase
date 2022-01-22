import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor call');
  }

  @Input() myValue = '';
  @Input() num: any;

  number: any;
  counter: any;

  ngOnInit() {
    console.log('ngonint call');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges call');
  }

  ngDoCheck() {
    //console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit call');
  }

  ngAfterContentChecked() {
    //console.log('ngaftercontentchecked call');
  }

  ngAfterViewInit() {
    //console.log('ngafterviewinit call');
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked call');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy call');
  }

  // @Input() placeholderText: string = '';
}
