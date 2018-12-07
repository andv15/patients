import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersAdminListPage } from "./modules/users/pages/users-admin-list/users-admin-list.page";
import { UsersAdminListComponent } from "./modules/users/components/users-admin-list/users-admin-list.component";
import { UserEntryComponent } from "./modules/users/components/user-entry/user-entry.component";
import { ModalAddUserComponent } from "./modules/users/components/modal-add-user/modal-add-user.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersAdminListPage,
    UsersAdminListComponent,
    UserEntryComponent,
    ModalAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
