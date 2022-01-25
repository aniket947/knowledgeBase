import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  inputData: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(get: any){
    this.inputData=get.value;
    
  }
  





}
