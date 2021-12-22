import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngSwitch',
  templateUrl: './ngSwitch.component.html',
  styleUrls: ['./ngSwitch.component.css']
})
export class ngSwitchComponent implements OnInit {
 

  constructor() { }

 

  ngOnInit(): void {
  }
  
 selectedProduct!: string;

  getProductVal(val: any){
    console.log(val.target.value);
    this.selectedProduct=val.target.value;
  }

  
}
