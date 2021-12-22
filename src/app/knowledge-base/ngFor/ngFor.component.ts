import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css']
})
export class ForComponent implements OnInit {


  constructor() { }

 

  ngOnInit(): void {
  }
  
 
  products =[
    { "username": "Aniket", "userage": 70 },
    { "username": "Anik", "userage": 40 }, { "username": "anup", "userage": 60 },
    { "username": "anshul", "userage": 30 }, { "username": "anil", "userage": 80 },
     { "username": "anish", "userage": 35 }, { "username": "anita", "userage": 90 }

  ];
  
  newproducts = this.products.filter((user: any) => {
    return parseInt(user.userage) >30 ;
  });


  
}
