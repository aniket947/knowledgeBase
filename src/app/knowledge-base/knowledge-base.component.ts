import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  @ViewChild('box') box:any=ElementRef;


@ViewChild(ViewChildComponent) child:any=ViewChildComponent

  constructor(private renderer:Renderer2) { }



  ngOnInit(): void {
    // console.log(this.box);
  }

ngAfterViewInit(){

  this.renderer.setStyle(this.box.nativeElement,'backgroundColor','green')
  console.log(this.box);
  // this.box.nativeElement.style.backgroundColor="green";


 
//  console.log(this.child)  
}


  changeChildProperty(){
this.child.userName="Aniket";
  }

  callChildMethod(){
this.child.clickHere();
  }
  

}
