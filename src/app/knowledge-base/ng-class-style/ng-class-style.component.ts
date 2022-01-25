import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.css']
})
export class NgClassStyleComponent implements OnInit {

  isActive:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  myStyle="15px";
  mltClasses={
class1:true,
class2:false,
class3:true,



  }


}
