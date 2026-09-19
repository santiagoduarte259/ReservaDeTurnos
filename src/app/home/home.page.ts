import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Turno {
  hora: string;
  estado: 'Disponible' | 'Reservado';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esto soluciona los errores de etiquetas ion-
})
export class HomePage {

  fechaSeleccionada: string = new Date().toISOString().split('T')[0];

  listaTurnos: Turno[] = [
    { hora: '08:00', estado: 'Disponible' },
    { hora: '09:00', estado: 'Reservado' },
    { hora: '10:00', estado: 'Disponible' },
    { hora: '11:00', estado: 'Disponible' },
    { hora: '12:00', estado: 'Reservado' }
  ];

  constructor() {}

  reservarTurno(turno: Turno) {
    if (turno.estado === 'Disponible') {
      turno.estado = 'Reservado';
    }
  }

  get totalDisponibles(): number {
    return this.listaTurnos.filter(t => t.estado === 'Disponible').length;
  }
}


