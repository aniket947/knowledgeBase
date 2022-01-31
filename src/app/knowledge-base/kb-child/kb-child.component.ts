import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from 'src/app/services/data-sharing-service.service';

@Component({
  selector: 'app-kb-child',
  templateUrl: './kb-child.component.html',
  styleUrls: ['./kb-child.component.css']
})
export class KbChildComponent implements OnInit {
  fetchData: string = "";

  constructor(private kbchildService:DataSharingServiceService) { }

  ngOnInit(): void {
  }

  getData(){
this.fetchData = this.kbchildService.data;           //showdata on left side
  }

}
