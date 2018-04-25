import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNavComponent: string = "";
  title = 'app';
  showComponent: (e: Event)=>void = function(e: Event){
    this.currentNavComponent = e;
  }
}
