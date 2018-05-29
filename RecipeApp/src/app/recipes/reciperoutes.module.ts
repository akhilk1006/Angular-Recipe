import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { NoRecipeSelectedComponent } from "../no-recipe-selected-component/no-recipe-selected-component.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipeRoutes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: '', component: NoRecipeSelectedComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]}
];

@NgModule({
    imports: [
       RouterModule.forChild(recipeRoutes) 
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRouterModule{

}