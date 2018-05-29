import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const shoppingListRoutes: Routes = [
    {path: '', component: ShoppingListComponent}
];
@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListModule{

}