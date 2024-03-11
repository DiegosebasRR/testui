import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuInterface } from '../../../interface/Menu.interface';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UpdateComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() menu: MenuInterface | undefined;
  @Output() delete = new EventEmitter<any>();
  @Output() update = new EventEmitter<{
    id: number;
    menuData: MenuInterface;
  }>();
  onDeleteMenu(): void {
    if (this.menu && this.menu.menuId) {
      this.delete.emit(this.menu.menuId);
    }
  }
  onUpdateMenu(menuData: MenuInterface): void {
    if (this.menu && this.menu.menuId) {
      this.update.emit({ id: this.menu.menuId, menuData: menuData });
    }
  }
}
