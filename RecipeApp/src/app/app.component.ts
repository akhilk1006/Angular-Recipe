import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataStorageService } from './shared/datastorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentNavComponent: string = "";
  title = 'app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBHKCIr0RfsaGFHlNdv8tQExdQEQObeXoA",
      authDomain: "ng-recipebook-50d61.firebaseapp.com",
    });
  }
  showComponent: (e: Event)=>void = function(e: Event){
    this.currentNavComponent = e;
  }
}
