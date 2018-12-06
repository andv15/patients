import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../models/index";
@Component({
  selector: "app-users-admin-list",
  templateUrl: "./users-admin-list.component.html",
  styleUrls: ["./users-admin-list.component.scss"]
})
export class UsersAdminListComponent implements OnInit {
  @Input() users;

  constructor() {}

  ngOnInit() {}
}
