import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "../../../../models//index";
import "rxjs";

@Component({
  selector: "app-users-admin-list-page",
  templateUrl: "./users-admin-list.page.html",
  styleUrls: ["./users-admin-list.page.scss"]
})
export class UsersAdminListPage implements OnInit {
  users: User[];

  name;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }
}
