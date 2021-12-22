import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-for-loop',
  templateUrl: './array-for-loop.component.html',
  styleUrls: ['./array-for-loop.component.css']
})
export class ArrayForLoopComponent implements OnInit {
  inputComplexArr: any = [];
  constructor() { }

  inputArr: any = [];
  newArray: any = [];

  agedPeopleCount = 0;
  totalOfEvenAges = 0;
  totalOfoddPeople:string =''

  ngOnInit(): void {

    this.inputArr = [{ "username": "Aniket", "userage": "70" },
    { "username": "Anik", "userage": "40" }, { "username": "anup", "userage": "60" },
    { "username": "anshul", "userage": "30" }, { "username": "anil", "userage": "80" },
     { "username": "anish", "userage": "35" }, { "username": "anita", "userage": "90" }];

    this.inputComplexArr = [
      {
        "username": "Aniket",
        "userage": "70",
        "communicationDetails": [
          {
            "temporaryAddress": "Pune",
            "permanantAddress": "Amravati"
          }
        ]
      },
      {
        "username": "baban",
        "userage": "40",
        "communicationDetails": [
          {
            "temporaryAddress": "warud",
            "permanantAddress": "Nagpur"
          }
        ]
      },
      {
        "username": "anup",
        "userage": "60",
        "communicationDetails": [
          {
            "temporaryAddress": "Pune",
            "permanantAddress": "Mumbai"
          }
        ]
      }
    ];

    // this.inputArr= this.inputArr.find(this.inputArr=>{
    //   return inputArr.userage<30}
    // )
    // console.log(this.inputArr)
  }


  iterateArray() {
    // const names=['Aniket','Anup','mahi']
    this.inputArr.forEach((user: any, index: any) => {
      // console.log(user.username + ' is ' + user.userage + ' Year old.');
      // user.userage = parseInt(user.userage) + 10;
      user.username = (user.username) +  ' Mandle';

      // if (parseInt(user.userage) > 40) {
      //   this.agedPeopleCount = this.agedPeopleCount+1;

      // }
      // if((index +1) %2 ==0){
      //   console.log(user.username);
      //   this.totalOfEvenAges = this.totalOfEvenAges +parseInt(user.userage);

      // }
      if((index +1) %2 !==0){
        // console.log(user.username);
        this.totalOfoddPeople =  this.totalOfoddPeople +' ' + ' ' + ' '+' '+ (user.username);

      }


    });
    // console.log(this.totalOfEvenAges + ' is total age of even indexes');
    console.log( this.totalOfoddPeople  +  ' is total age of even indexes');

    // console.log(this.agedPeopleCount);
    // console.log(this.inputArr);

  }
  multiLevelObjects() {
    this.inputComplexArr.forEach((user: any) => {

      // console.log(user.communicationDetails);
      // console.log(user.communicationDetails[0]);
      // console.log(user.communicationDetails[0].temporaryAddress);
      if (user.communicationDetails[0].temporaryAddress === "Pune") {
        console.log(user.username)
      }
    });
  }


}




