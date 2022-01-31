import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit {
  divHeight: number | undefined;

  @HostListener("window:resize") onWindowResize() {
    console.log('hiiiiiiiiiiii')
    this.divHeight=50;


  }

  constructor() { }

  ngOnInit(): void {
    this.divHeight=100;


  }
  

}
