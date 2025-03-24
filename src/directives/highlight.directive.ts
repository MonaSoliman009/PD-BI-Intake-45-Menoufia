import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges,OnInit{

  @Input() highlightedColor:string=''
  @Input('appHighlight') defaultColor:string=''

  constructor(private elemRef:ElementRef) {

  }
  ngOnInit(): void {
   console.log("on init");

  }
  ngOnChanges(): void {
    console.log("on changes");

    this.elemRef.nativeElement.style.backgroundColor=this.defaultColor

  }

  @HostListener('mouseover')
  fun1(){

    this.elemRef.nativeElement.style.backgroundColor=this.highlightedColor
  }

  @HostListener('mouseout')
  fun2(){

    this.elemRef.nativeElement.style.backgroundColor=this.defaultColor

  }

}
