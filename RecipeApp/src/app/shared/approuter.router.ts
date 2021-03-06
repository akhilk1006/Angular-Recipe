import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "../home/home.component";
const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'recipes', loadChildren: '../recipes/recipes.module#RecipeModule'},
    {path: 'shoppinglist', loadChildren: '../shopping-list/shoppinglist.module#ShoppingListModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRouter{

}