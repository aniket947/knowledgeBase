import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from 'src/app/services/practice-service.service';

@Component({
  selector: 'app-practice-comp2',
  templateUrl: './practice-comp2.component.html',
  styleUrls: ['./practice-comp2.component.css']
})
export class PracticeComp2Component implements OnInit {
  showData: string = '';

  constructor(private _nameService: PracticeServiceService) {
    this._nameService.textedName.subscribe((receivedData: any) => {
      this.showData = receivedData;
    })
  }

  ngOnInit(): void {    
  }

}
