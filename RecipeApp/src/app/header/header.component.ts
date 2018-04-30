import { Component, OnInit, Output, EventEmitter, Renderer, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }
}
