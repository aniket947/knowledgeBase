import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-kb-parent',
  templateUrl: './kb-parent.component.html',
  styleUrls: ['./kb-parent.component.css']
})
export class KbParentComponent implements OnInit {
  showSetData:any;

  constructor(private kbparentService:DataSharingServiceService) { }

  ngOnInit(): void {
  }

  setData(){
    this.kbparentService.data = 'Aniket';                 //set data on left side

  }

}
