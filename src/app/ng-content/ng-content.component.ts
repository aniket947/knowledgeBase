import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  statusOnline:boolean=true;

  constructor() { 
    console.log('ngContent')
  }

  ngOnInit(): void {
  }

  products=[
    {name:'Laptop' },
    {name:'TV' },
    {name:'Mobile' },
    {name:'Washing Machine' }
  ]

}
