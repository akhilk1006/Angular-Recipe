import { Directive, ElementRef, ViewChild, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') flag = false;
  @HostListener('click') dropdownToggle(){
    this.flag = !this.flag;
  }
  constructor() { }
  ngOnInit(){
    
  }
}
