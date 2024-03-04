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

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ModalComponent,
    CardComponent,
    FormsModule,
    ReactiveFormsModule,
    UpdateModalComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  constructor(private servicio: ApiService) {}

  menuList: MenuInterface[] = [];

  updatedMenuData: any = {
    menuId: 1,
    name: 'actualizado 2',
    description:
      'Tender pieces of chicken cooked in a rich and creamy tomato-based sauce.',
    price: 17.99,
    image:
      'https://res.cloudinary.com/dbarwsgb4/image/upload/v1707679246/Mujer/nkqgdwzuv0icyfo9emri.jpg',
  };
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

  editarMenu(id: number, menuData: MenuInterface): void {
    this.servicio.updateMenu(id, menuData).subscribe({
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
