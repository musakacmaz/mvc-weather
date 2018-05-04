import { NgModule, Directive, ElementRef, AfterViewInit } from '@angular/core';
import { EmptyTextService } from './empty-text.service';

@Directive({ selector: '[myprefix]' })
export class EmptyTextDirective implements AfterViewInit {
  constructor(private el: ElementRef, private empservice: EmptyTextService) {}
  ngAfterViewInit() {
    const content: string = this.el.nativeElement.innerHTML;
    if (!content) {
      // if there is no content,show message getting from EmptyTextService
      this.el.nativeElement.innerHTML = this.empservice.get();
    }
  }
}
