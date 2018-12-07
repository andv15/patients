import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-entry",
  templateUrl: "./user-entry.component.html",
  styleUrls: ["./user-entry.component.scss"]
})
export class UserEntryComponent implements OnInit {
  @Input() user;
  constructor() {}

  ngOnInit() {}
}
