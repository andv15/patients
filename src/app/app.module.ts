import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersAdminListPage } from "./modules/users/pages/users-admin-list/users-admin-list.page";
import { UsersAdminListComponent } from "./modules/users/components/users-admin-list/users-admin-list.component";

@NgModule({
  declarations: [AppComponent, UsersAdminListPage, UsersAdminListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
