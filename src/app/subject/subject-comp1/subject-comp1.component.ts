import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-subject-comp1',
  templateUrl: './subject-comp1.component.html',
  styleUrls: ['./subject-comp1.component.css']
})
export class SubjectComp1Component implements OnInit {

  userName:string="uxTrensds";

  constructor(private _designservices:UserDetailsService) {
    this._designservices.userName.subscribe((uname: any) =>{
      this.userName = uname;
    });
   }

  ngOnInit(): void {

  }

  updateUserName(uname:any){
//  this.userName=uname.value
this._designservices.userName.next(uname.value)
  }

}
