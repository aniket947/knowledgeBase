import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  // firstName:string | undefined; // declare propery


  userObj = {                          // declare property in object
    userMarriedStatus: '',
    firstName: '',
    middleName: '',
    lastName: '',
    userAge: '',
    userGender: '',
    userDob: '',
    usermailId: '',
    userMobile: ''
  };

  userAddr = {
    temp: {
      state: '',
      city: '',
      address: '',
      pincode: ''
    },
    perm: {
      state: '',
      city: '',
      address: '',
      pincode: ''
    }
  }
  qualificationObj = {
    selectedQualification: '',
    selectedBoard: '',
    selectedpercentage: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  copyTempAddress(event: any) {
    if (event.currentTarget.checked) {
      this.userAddr.perm = this.userAddr.temp;
    }
    else {
      this.userAddr.perm = {
        state: '',
        city: '',
        address: '',
        pincode: ''
      };
    }
  }

  saveUserInfo() {
    console.log(this.userObj);
  }

  qualification() {

  }
  addQualificationDetails() {

  }
}
