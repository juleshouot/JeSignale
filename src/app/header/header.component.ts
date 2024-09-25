import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img src="data:image/png;base64,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" alt="Logo" />
      <nav>
        <button (click)="navigateTo('/repair')">
          <p>Réparations</p>
        </button>
        <button (click)="navigateTo('/about')">
          <p>Températures</p>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      align-items: center;
      justify-content: space-between; /* Espace entre le logo et les boutons */
      padding: 10px 20px; /* Espacement autour du header */
      background-color: #ffffff; /* Couleur de fond du header */
      border-bottom: 2px solid #007BFF; /* Bordure inférieure bleue */
    }

    nav {
      display: flex;
      gap: 15px; /* Espacement entre les boutons */
    }

    button {
      background: none; /* Pas de fond pour les boutons */
      border: none; /* Pas de bordure pour les boutons */
      cursor: pointer; /* Curseur pointer sur les boutons */
      color: #007BFF; /* Couleur du texte des boutons */
      font-size: 16px; /* Taille de la police */
    }

    button:hover {
      text-decoration: underline; /* Soulignement au survol */
    }

    img {
      width: 90px; /* Largeur du logo */
      height: auto; /* Hauteur automatique pour garder le ratio */
    }
  `],
  standalone: true
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
