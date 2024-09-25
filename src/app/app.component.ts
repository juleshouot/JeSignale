import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import pour les directives communes
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Assurez-vous que ce chemin est correct
import { MapComponent } from './map/map.component'; // Assurez-vous d'importer le MapComponent

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="main-content">
      <div class="sidebar">
        <router-outlet></router-outlet> <!-- Affiche le contenu des composants de réparation ou de température -->
      </div>
      <app-map></app-map> <!-- Carte persistante à droite -->
    </main>
  `,
  standalone: true,
  
  imports: [CommonModule, RouterOutlet, HeaderComponent, MapComponent] // Ajout de CommonModule
})
export class AppComponent {
  title = "JeSignaleV4";
}
