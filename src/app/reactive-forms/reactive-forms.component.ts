import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myReactiveForm: any = FormGroup;
  notAllowNames: any = ['Aniket', 'Mandle'];

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.nanames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.NaEmails]),
      }),
      'course': new FormControl(null),
      'gender': new FormControl(null),
      'skills': new FormArray([
        new FormControl(null, Validators.required),

      ])
    });

    // this.myReactiveForm.controls.userDetails.controls.userName.value = "Angu";     //to show data on UI

    // this.myReactiveForm.valueChanges.subscribe((res: any) => {                       // valueChanges
    //   console.log(res);
    // });

    // this.myReactiveForm.statusChanges.subscribe((statusChange: any) => {           // statusChanges
    //   console.log(statusChange);
    // });

    // setTimeout(() => {                                                             // setValue
    //   this.myReactiveForm.setValue({
    //     'userDetails': {
    //       'userName': 'Aniket',
    //       'email': 'hhjh@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male',
    //     'skills': [
    //       'Photo'
    //     ]

    //   })
    // }, 2000)


    // setTimeout(() => {                                                             // setValue
    //     this.myReactiveForm.patchValue({
    //       'userDetails': {
    //         'userName': 'Aniket',
    //          'email': 'hhjh@gmail.com'
    //       },
          
    //     })
    //    }, 2000)


  }

  onSubmit() {
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({                                             /// some fields remains set after reset
        'userDetails': {
          'userName': 'Aniket',
           'email': 'hhjh@gmail.com'
        },
    });
  }

  onAddSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control)
  }

  nanames(control: FormControl) {
    if (this.notAllowNames.indexOf(control.value !== -1)) {
      return { 'nameIsnotAllowed': true }
    }
    return null;
  }

  NaEmails(control: FormControl) {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'uxtrendz@gmail.com') {
          resolve({ 'emailNotAllowed': true })
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }


}



