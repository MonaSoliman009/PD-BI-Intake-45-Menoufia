import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightedColor:string=''
  @Input('appHighlight') defaultColor:string=''

  constructor(private elemRef:ElementRef) {
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
