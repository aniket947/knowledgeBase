import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-subject-comp3',
  templateUrl: './subject-comp3.component.html',
  styleUrls: ['./subject-comp3.component.css']
})
export class SubjectComp3Component implements OnInit {
  userName:string="UxTrends";
  constructor(private _designservices:UserDetailsService) {
    this._designservices.userName.subscribe((uname: any) =>{
      this.userName = uname;
    });
   }

  ngOnInit(): void {
  }

}
