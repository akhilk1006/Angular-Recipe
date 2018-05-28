import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  redirectURL: string;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.route.queryParams.subscribe((params: Params) => {
      this.redirectURL = params['returnTo'] || '/';
    });
    this.authService.signInUserAndRedirect(form.value.email,form.value.password, this.redirectURL);
  }
}
