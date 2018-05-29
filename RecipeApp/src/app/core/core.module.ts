import { NgModule } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { AppRouter } from "../shared/approuter.router";
import { SharedModule } from "../shared/shared.module";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { DataStorageService } from "../shared/datastorage.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppRouter,
        SharedModule
    ],
    exports: [
        AppRouter,
        HeaderComponent
    ],
    providers: [RecipeService, ShoppingListService, DataStorageService, AuthService, AuthGuard]
})
export class CoreModule{

}