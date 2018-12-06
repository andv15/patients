import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/services/api.service";
import { User } from "../../../models/index";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private readonly url = "http://jsonplaceholder.typicode.com/users";
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.apiService.get(this.url) as Observable<User[]>;
  }
}
