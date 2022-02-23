import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-subject-comp2',
  templateUrl: './subject-comp2.component.html',
  styleUrls: ['./subject-comp2.component.css']
})
export class SubjectComp2Component implements OnInit {

  userName:string="uxTrensds"
  constructor(private _designservices:UserDetailsService) {
    this._designservices.userName.subscribe((uname: any) =>{
      this.userName = uname;
    });
   }

  ngOnInit(): void {
  }

}
