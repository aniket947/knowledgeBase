import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.css']
})
export class IfComponent implements OnInit {
  isIfElseOpen: boolean=false;
  isOpen:boolean=false;

  constructor() { }

 

  ngOnInit(): void {
  }
  
  
  onIfElseClick(){
    this.isIfElseOpen=!this.isIfElseOpen;
  }

  
  
}
