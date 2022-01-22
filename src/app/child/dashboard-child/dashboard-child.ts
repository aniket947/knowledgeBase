import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.html',
  styleUrls: ['./dashboard-child.css'],
})
export class DashboardChildComponent implements OnInit {
inputData: any;
  constructor() {}

  @Input() myValue = '';
  




  ngOnInit() {
    this.inputData = this.myValue;
  }
}
