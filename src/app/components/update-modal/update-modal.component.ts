import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css',
})
export class UpdateModalComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  @Input() id: string | undefined;

  menuForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required]),
    Image: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.menuForm.valid) {
      this.formSubmitted.emit(this.menuForm.value);
    }
  }
  modalId: string = 'update_modal_' + Math.floor(Math.random() * 1000);

  constructor() {}

  openModal(): void {
    let dynamicId: string;
    do {
      dynamicId = 'update_modal_' + Math.floor(Math.random() * 1000);
    } while (document.getElementById(dynamicId)); // Verificar si el ID generado ya está en uso

    this.modalId = dynamicId;

    const modalElement = document.getElementById(
      dynamicId
    ) as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal(); // Abrir el modal
    }
  }
}
