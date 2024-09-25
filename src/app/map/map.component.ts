import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `
    <div class="map-container">
      
      <div class="map"> <!-- Ceci peut être une image ou une carte intégrée -->
        <img src="https://via.placeholder.com/400x300" alt="Carte" />
      </div>
    </div>
  `,
  styles: [`
    .map-container {
      position: relative;
      margin-left: 450px; /* Ajoutez un peu d'espace au-dessus */
      border: 1px solid #ccc;
    }
    .map {
      width: 100%;
      max-width: 600px; /* Largeur maximale de la carte */
      height: 300px; /* Hauteur fixe pour la carte */
      overflow: hidden;
      border: 1px solid #ccc; /* Bordure grise */
      border-radius: 5px; /* Coins arrondis */
    }
    .map img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ajuste l'image pour couvrir le conteneur */
    }
  `]
})
export class MapComponent {}
