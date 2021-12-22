import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-find-filter-some',
  templateUrl: './find-filter-some.component.html',
  styleUrls: ['./find-filter-some.component.css']
})
export class ArrayFindFilterSomeComponent implements OnInit {

  constructor() { }

  inputArr: any = [];
  newArray = [];
  simpleArray = [2, 3, 4, 7, 4, 2, 8, 2];

  ngOnInit(): void {

    this.inputArr = [{ "username": "Aniket", "userage": "70" },
    { "username": "Anik", "userage": "40" }, { "username": "anup", "userage": "60" },
    { "username": "anshul", "userage": "30" }, { "username": "anil", "userage": "80" },
    { "username": "anish", "userage": "35" }, { "username": "anita", "userage": "90" }];

  }
  find() {
    // let output = this.simpleArray.find((number: any) => {
    //   return number >4;
    // });
    let output = this.inputArr.find((user: any) => {
      return parseInt(user.userage )> 70;
    })
    console.log(output);
  }
  filter() {
    // let output = this.simpleArray.filter((number: any) => {
    //   return number === 5;
    // });
    let output = this.inputArr.filter((user: any) => {
      return parseInt(user.userage) !==30 ;
    });
    console.log(output);
  }
  some() {
    // let output = this.simpleArray.some((number: any) => {
    //   return number === 5;
    // });
    let output = this.inputArr.some((user:any)=>{
      return user.userage >30
    })
    console.log(output);
  }

  // getInputInfo(my: any){
  //   console.log(my.value)
  // }

  uname:string="";
}






