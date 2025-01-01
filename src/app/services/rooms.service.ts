import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private readonly endpoint =
    'https://<tu-proyecto>.functions.supabase.co/getRoomsByCategory'; // Reemplaza con la URL de tu función

  constructor() {}

  async getRoomsByCategory(category: string): Promise<any[]> {
    try {
      const response = await axios.post(this.endpoint, { category });
      return response.data; // Devuelve los datos obtenidos
    } catch (error: any) {
      console.error('Error fetching rooms:', error.response?.data || error.message);
      return [];
    }
  }
}
