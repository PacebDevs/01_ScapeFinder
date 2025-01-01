import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private readonly endpoint =
    'https://wzuofxmxelrihdnwdflx.supabase.co/functions/v1/getRoomsByCategory'; // Reemplaza con la URL de tu función

  constructor() {}

  async getRoomsByCategory(category: string): Promise<any[]> {
    try {
      const response = await axios.post<any[]>(
        this.endpoint,
        { category }, // Cuerpo JSON
        {
          headers: {
            'Content-Type': 'application/json', // Asegura que el encabezado es correcto
          },
        }
      );
      return response.data; // Retorna los datos de la respuesta
    } catch (error: any) {
      console.error('Error fetching rooms:', error.response?.data || error.message);
      return [];
    }
  }
}