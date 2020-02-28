import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  originalBackground: string;

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    if (this.eleRef) this.originalBackground = this.eleRef.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlightBackground('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlightBackground(null);
  }

  private highlightBackground(color?: string) {
    if (!this.eleRef) return;
    if (color) this.eleRef.nativeElement.style.backgroundColor = color;
    else this.eleRef.nativeElement.style.backgroundColor = this.originalBackground ? this.originalBackground : null;
  }
}
