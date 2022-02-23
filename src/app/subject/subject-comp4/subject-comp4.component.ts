import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-subject-comp4',
  templateUrl: './subject-comp4.component.html',
  styleUrls: ['./subject-comp4.component.css']
})
export class SubjectComp4Component implements OnInit {
  userName:string="uxtrends"
  constructor(private _designservices:UserDetailsService) {
    this._designservices.userName.subscribe((uname: any) =>{
      this.userName = uname;
    });
   }

  ngOnInit(): void {
  }

}
