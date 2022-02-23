import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  userName:string="Uxtrends"
  constructor(private _designservices:UserDetailsService) {
    this._designservices.userName.subscribe((uname: any) =>{
      this.userName = uname;
    });
   }

  ngOnInit(): void {
  }

}
