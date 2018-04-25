import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigationEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  showComponent: (componentName : string)=>void = function(componentName: string) {
    this.navigationEvent.emit(componentName);
  };

}
