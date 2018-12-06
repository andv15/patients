import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersAdminListPageComponent } from "./users-admin-list.page";

describe("UsersAdminListPageComponent", () => {
  let component: UsersAdminListPageComponent;
  let fixture: ComponentFixture<UsersAdminListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAdminListPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
