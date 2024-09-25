import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-temperatures',
  template: `
    <div>
      <h1>Sélectionnez un lieu</h1>
      <select [(ngModel)]="selectedLocation">
        <option *ngFor="let location of locations" [value]="location">
          {{ location.name }}
        </option>
      </select>

      <div *ngIf="selectedLocation">
        <h2>{{ selectedLocation.name }}</h2>
        <p>Température: {{ selectedLocation.temperature }}°C</p>
        <p>Humidité: {{ selectedLocation.humidity }}%</p>
      </div>
    </div>
  `,
  standalone: true,
  imports: [FormsModule, CommonModule]  // Importer FormsModule et CommonModule
})
export class TemperaturesComponent {
  selectedLocation: { name: string; temperature: number; humidity: number } | null = null;

  locations = [
    { name: 'Chambre 1', temperature: 22, humidity: 60 },
    { name: 'Chambre 2', temperature: 18, humidity: 70 },
    { name: 'Couloir 1', temperature: 25, humidity: 55 },
    { name: 'Couloir 2', temperature: 30, humidity: 65 },
    { name: 'autre', temperature: 28, humidity: 50 }
  ];
}
