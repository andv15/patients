import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersAdminListPage } from "./modules/users/pages/users-admin-list/users-admin-list.page";

const routes: Routes = [
  {
    path: "",
    component: UsersAdminListPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
