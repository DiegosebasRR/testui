import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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
  @Input() id: number | undefined = 0;
  @ViewChild('myModal') modal: any;
  menuForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.menuForm.valid) {
      this.formSubmitted.emit(this.menuForm.value);
      this.closeModal();
    }
  }
  closeModal() {
    // Cierra el modal
    this.modal.nativeElement.checked = false;
  }
}
