import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { CardComponent } from '../../../components/card/card.component';
import { ApiService } from '../../../api.service';
import { MenuInterface } from '../../../../interface/Menu.interface';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UpdateModalComponent } from '../../../components/update-modal/update-modal.component';
import { DialogUpdateComponent } from '../../../components/dialog-update/dialog-update.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ModalComponent,
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    UpdateModalComponent,
    DialogUpdateComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  constructor(private servicio: ApiService) {}

  menuList: MenuInterface[] = [];

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.servicio.getMenus().subscribe({
      next: (data) => {
        this.menuList = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  agregarMenu(menuData: MenuInterface) {
    this.servicio.addMenu(menuData).subscribe({
      next: (data) => {
        this.obtenerDatos();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteMenu(id: number): void {
    this.servicio.deleteMenu(id).subscribe({
      next: () => {
        this.obtenerDatos();
        console.log('Menú eliminado correctamente');
      },
      error: (error) => {
        console.error('Error al eliminar el menú:', error);
      },
    });
  }

  editarMenu(event: { id: number; menuData: MenuInterface }) {
    this.servicio.updateMenu(event.id, event.menuData).subscribe({
      next: () => {
        this.obtenerDatos();
        console.log('Menú editado correctamente');
      },
      error: (error) => {
        console.error('Error al editar el menú:', error);
      },
    });
  }
}
