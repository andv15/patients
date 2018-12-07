import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  NgbModalRef,
  NgbModalOptions,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "modal-add-user-component",
  templateUrl: "./modal-add-user.component.html",
  styleUrls: ["./modal-add-user.component.scss"]
})
export class ModalAddUserComponent {
  modalRef: NgbModalRef;
  closeBinding: Function;
  @ViewChild("reference") reference: ElementRef;

  constructor(private modalService: NgbModal) {
    this.closeBinding = this.closeModal.bind(this);
  }

  openModal(modal: any): void {
    console.log("open modal");
    let options: NgbModalOptions = {
      size: "lg",
      backdrop: "static",
      windowClass: "modalAddUser"
    };
    this.modalRef = this.modalService.open(this.reference, options);
  }

  closeModal(): void {
    this.modalRef.close();
  }

  onCancelClicked() {
    /*     this.modalCancel.openModal(this.modalCancel.reference); */
    console.log("clicked");
  }
}
