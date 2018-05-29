import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const authRoutes: Routes = [
    {path: 'signup',component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        RouterModule.forChild(authRoutes),
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationModule {
    
}