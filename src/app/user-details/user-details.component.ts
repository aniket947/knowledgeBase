import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
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
  };

  isEditClicked: boolean = false;
  selectedQualification = '';
  selectedBoard = '';
  selectedpercentage = '';
  isTempPermAddSame: boolean = false;
  educationDetails: any = []
  
  editedPosition: number = -1;
  userqualification: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addQualification() {
    let recordFound = this.educationDetails.find((user: any) => {
      return (user.userqualification===this.selectedQualification )
    });
    if(recordFound){
      alert(this.selectedQualification + ' Qualification already added. Please select another Qualification ');
      return ;
    }
    let validResult = this.validQualificationDetails();
    if(!validResult){
      return;
    }
    
    console.log(recordFound);

    if(validResult || recordFound===undefined) {                                    
      const user = { userqualification: this.selectedQualification, userboard: this.selectedBoard, userpercentage: this.selectedpercentage };///// created objec here
      this.educationDetails.push(user);
      this.resetVariables();
      
    }
    
  }

  updateQualification() {
    let validResult = this.validQualificationDetails();
    if (validResult) {
      const user = { userqualification: this.selectedQualification, userboard: this.selectedBoard, userpercentage: this.selectedpercentage };///// created objec here
      this.educationDetails[this.editedPosition] = user;
      this.resetVariables();
    }
  }

  deleteUserQuali(selectedPosition: any) {
    this.educationDetails.splice(selectedPosition, 1);
  }

  editUserQuali(selectedRecord: any, editedPosition: number) {        //editedposition = edit element position
    console.log(selectedRecord);
    this.selectedQualification = selectedRecord.userqualification;
    this.selectedBoard = selectedRecord.userboard;
    this.selectedpercentage = selectedRecord.userpercentage;
    this.isEditClicked = true;
    this.editedPosition = editedPosition;
  }

  resetVariables() {
    this.selectedQualification = '';
    this.selectedBoard = '';
    this.selectedpercentage = '';
    this.isEditClicked = false;
    this.editedPosition = -1;
  }
  validQualificationDetails(){
    if (this.selectedQualification === '') {
      alert('Select Qualification');
      return false;
    }
    if (this.selectedBoard === '') {
      alert('Select Board');
      return false;
    }
    if (this.selectedpercentage === '') {
      alert('Select Percentage');
      return false;
    }
    return true;
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
    this.isTempPermAddSame = event.currentTarget.checked;
  }

  saveUserInfo() {
    console.log(this.userObj);
  }
}

