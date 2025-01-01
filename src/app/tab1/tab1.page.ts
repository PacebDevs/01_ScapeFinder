import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service'; // Asegúrate de que la ruta es correcta

@Component({
  standalone: false, // Elimina esta línea
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  rooms: any[] = []; // Almacena las salas obtenidas
  selectedCategory: string = 'Misterio'; // Categoría inicial

  constructor(private roomsService: RoomsService) {}

  async ngOnInit() {
    await this.loadRooms();
  }

  async loadRooms() {
    try {
      this.rooms = await this.roomsService.getRoomsByCategory(this.selectedCategory);
      console.log('Rooms loaded:', this.rooms); // Verifica los datos en la consola
    } catch (error) {
      console.error('Error loading rooms:', error);
    }
  }
}
