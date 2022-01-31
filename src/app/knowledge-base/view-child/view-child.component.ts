import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

userName:any="Default Name";

  constructor() { }

  ngOnInit(): void {
  }

  clickHere(){
    alert(this.userName);
  }


}
