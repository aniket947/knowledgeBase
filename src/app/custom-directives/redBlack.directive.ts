import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[app-RedBlack]',
})
export class RedBlackDirective implements OnInit {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = 'green';
    // console.log(el);
  }

  ngOnInit() {
    this.el.nativeElement.value.length = '';
  }

  @HostListener('keyup') onkeyup() {
    if (this.el.nativeElement.value.length === 10) {
      this.el.nativeElement.style.border = '5px solid green';
    } else {
      this.el.nativeElement.style.border = '5px solid red';
    }
  }
}
