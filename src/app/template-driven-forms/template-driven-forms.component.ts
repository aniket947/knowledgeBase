import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('myForm') myForm:any=NgForm;

  userName='';
  emailid='';
  selectedCourse='';  
  genderrr='';
  submitted=false;
  FormData={
    userName:'',
    email:'',
    course:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm);
    this.submitted=true;
    this.FormData.userName=this.myForm.value.userDetails.userName;
    this.FormData.email=this.myForm.value.userDetails.email;
    this.FormData.course=this.myForm.value.course;
  }

  

      

  }
