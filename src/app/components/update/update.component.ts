import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
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
  selector: 'app-update',
  standalone: true,
  imports: [MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  constructor(public dialog: MatDialog) {}
  @Output() formSubmitted = new EventEmitter<any>();

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
    }
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogContentExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'update-dialog.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>) {}
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
    this.modal.nativeElement.checked = false;
  }
}
