import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  constructor() { }

  // name: string = "";
  // age: number = 0;
  // usersArr: any = []; ////////declare global array

  ngOnInit(): void {
  }

  // addObject() {
   

  //   const user = { username: this.name, userage: this.age };///// created objec here
  //   this.usersArr.push(user);   ///////// push created object in array
  //   console.log(this.usersArr);
  // }

}
