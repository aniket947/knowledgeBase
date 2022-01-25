import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nameSearch: string = '';
  productArr = [
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
    {
      sno: '4',
      name: 'Washing machine',
      price: '30000',
      availability: 'available',
    },
    {
      sno: '5',
      name: 'bike',
      price: '90000',
      availability: 'not available',
    },
    {
      sno: '6',
      name: 'car',
      price: '100000',
      availability: 'available',
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }
  value = 'this is test value';
}
