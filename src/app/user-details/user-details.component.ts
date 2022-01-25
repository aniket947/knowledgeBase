import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  mltStyle = {
    border: '10px solid green',
  };
  uservalue: any;
  childExist: boolean = true;
  counter: any;
  ipnum: number = 0;
  childDestroy() {
    this.childExist = false;
  }

  submitValue(val: any) {
    this.uservalue = val.value;
  }

  
  userObj = {
    // declare property in object
    userMarriedStatus: '',
    firstName: '',
    middleName: '',
    lastName: '',
    userAge: '',
    userGender: '',
    userDob: '',
    usermailId: '',
    userMobile: '',
  };
  userAddr = {
    // declare property in object of object...temp and perm objects in userAddr object
    temp: {
      state: '',
      city: '',
      address: '',
      pincode: '',
    },
    perm: {
      state: '',
      city: '',
      address: '',
      pincode: '',
    },
  };

  isEditClicked: boolean = false;
  selectedQualification = ''; // declaration
  selectedBoard = ''; // declaration
  selectedpercentage = ''; // declaration
  isTempPermAddSame: boolean = false; // for checkbox
  educationDetails: any = []; // array for adding educational details
  qualifications: any = ['SSC', 'HSC', 'Diploma', 'Gratuate', 'Post Graduate']; // qualification dropdown

  editedPosition: number = -1;
  userqualification: string | undefined;
  fakeNameProp: any;
  product: any;

  constructor(private _msgService: UserDetailsService) {}
  products = [];
  ngOnInit(): void {
    this._msgService.states().subscribe((productData) => {
      this.products = productData;
    });
    this.counter = setInterval(() => {
      this.ipnum = this.ipnum + 1;
    }, 5000);
  }

  value = 'this is test value';

  addQualification() {
    let recordFound = this.educationDetails.find((user: any) => {
      // finds, if user adding same qualification
      return user.userqualification === this.selectedQualification;
    });
    // if (recordFound) {
    //   alert(
    //     this.selectedQualification +
    //       ' Qualification already added. Please select another Qualification '
    //   );
    //   return;
    // }
    let validResult = this.validQualificationDetails(); // validation...alert for  'please select qualification'
    if (!validResult) {
      return;
    }

    console.log(recordFound);

    if (validResult || recordFound === undefined) {
      const user = {
        userqualification: this.selectedQualification,
        userboard: this.selectedBoard,
        userpercentage: this.selectedpercentage,
      }; ///// created object here
      this.educationDetails.push(user); // push user object into array

      let output = this.qualifications.filter((qualification: any) => {
        return qualification != this.selectedQualification; // filter qualifications except selected one
      });
      this.qualifications = output;
      this.resetVariables();
    }
  }

  updateQualification() {
    let validResult = this.validQualificationDetails();
    if (validResult) {
      const user = {
        userqualification: this.selectedQualification,
        userboard: this.selectedBoard,
        userpercentage: this.selectedpercentage,
      }; ///// created objec here
      this.educationDetails[this.editedPosition] = user;

      let output = this.qualifications.filter((qualification: any) => {
        return qualification != this.selectedQualification; // filter qualifications except selected one
      });
      this.qualifications = output;

      this.resetVariables();
    }
  }

  deleteUserQuali(selectedRecord: any, selectedPosition: any) {
    this.educationDetails.splice(selectedPosition, 1); // delete qualification details
    this.qualifications.push(this.selectedQualification); // deleted qualification push to qualifications array
  }

  editUserQuali(selectedRecord: any, editedPosition: number) {
    //editedposition = edit element position
    this.selectedQualification = selectedRecord.userqualification;
    this.selectedBoard = selectedRecord.userboard;
    this.selectedpercentage = selectedRecord.userpercentage;
    this.isEditClicked = true;
    this.editedPosition = editedPosition;
    this.qualifications.push(this.selectedQualification);
  }

  resetVariables() {
    this.selectedQualification = '';
    this.selectedBoard = '';
    this.selectedpercentage = '';
    this.isEditClicked = false;
    this.editedPosition = -1;
  }
  validQualificationDetails() {
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
    } else {
      this.userAddr.perm = {
        state: '',
        city: '',
        address: '',
        pincode: '',
      };
    }
    this.isTempPermAddSame = event.currentTarget.checked;
  }
  userNames = '';

  saveUserInfo() {
    console.log(this.userObj);
  }
}
