import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  dataArr: any;

  ngOnInit() {
    this.dataArr = [
      {
        sno: '1',
        name: 'Mobile',
        price: '10000',
        availability: 'available',
      },
      {
        sno: '2',
        name: 'Laptop',
        price: '50000',
        availability: 'available',
      },
      {
        sno: '3',
        name: 'TV',
        price: '20000',
        availability: 'not available',
      },
    ];
  }
}
