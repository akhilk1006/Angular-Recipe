import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";
import { NoRecipeSelectedComponent } from "../no-recipe-selected-component/no-recipe-selected-component.component";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { SigninComponent } from "../auth/signin/signin.component";
import { AuthGuard } from "../auth/auth-guard.service";
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: NoRecipeSelectedComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]},
    {path: 'shoppinglist', component: ShoppingListComponent},
    {path: 'signup',component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouter{

}