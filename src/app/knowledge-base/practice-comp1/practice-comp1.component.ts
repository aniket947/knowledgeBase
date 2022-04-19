import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from 'src/app/services/practice-service.service';

@Component({
  selector: 'app-practice-comp1',
  templateUrl: './practice-comp1.component.html',
  styleUrls: ['./practice-comp1.component.css']
})
export class PracticeComp1Component implements OnInit {

  textName:string='';

  constructor(private _nameService:PracticeServiceService) { }

  ngOnInit(): void {
    
  }

  addName(){
    this._nameService.textedName.next(this.textName);
    this.textName='';
  }
}
