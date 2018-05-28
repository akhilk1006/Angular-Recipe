import * as firebase from 'firebase';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Url } from 'url';
@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, route: ActivatedRoute){}
    signUpUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(error => console.log(error)
        );
    }
    signInUserAndRedirect(email: string, password: string, redirectURL: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            this.router.navigate([redirectURL]);
            firebase.auth().currentUser.getIdToken().then((token:string)=>{
                this.token = token;
            })
        })
        .catch(error => console.log(error));
    }

    getToken(){
        firebase.auth().currentUser.getIdToken().then((token: string) => {
            this.token = token;
        });
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }
}