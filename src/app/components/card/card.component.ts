import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuInterface } from '../../../interface/Menu.interface';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpdateModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() menu: MenuInterface | undefined;
  @Output() delete = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  onDeleteMenu(): void {
    if (this.menu && this.menu.menuId) {
      this.delete.emit(this.menu.menuId);
    }
  }
}
