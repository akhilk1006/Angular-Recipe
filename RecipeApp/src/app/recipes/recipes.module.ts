import { NgModule } from "@angular/core";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { NoRecipeSelectedComponent } from "../no-recipe-selected-component/no-recipe-selected-component.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RecipeRouterModule } from "./reciperoutes.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipesComponent,
        RecipeEditComponent,
        NoRecipeSelectedComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRouterModule,
        SharedModule
    ]
})
export class RecipeModule {

}