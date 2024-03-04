import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
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
}
