import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-array',
  templateUrl: './object-array.component.html',
  styleUrls: ['./object-array.component.css']
})
export class ObjectArrayComponent implements OnInit {

  constructor(private router:Router) { }

  name: string = "";
  age: number = 0;
  usersArr: any = []; ////////declare global array

  ngOnInit(): void {
  }

  addObject() {

    const user = { username: this.name, userage: this.age };///// created objec here
    this.usersArr.push(user);   ///////// push created object in array
    // console.log(this.usersArr);

    if(this.usersArr.length>3){
    // alert("more than 3")
    this.router.navigate([''])
    }
  }

  
}
