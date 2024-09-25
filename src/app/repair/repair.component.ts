import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="repair-container">
      <h1>Réparations</h1>
      <button (click)="showForm = true" class="create-repair-button">Créer une réparation</button>

      <!-- Modal -->
      <div class="modal" *ngIf="showForm">
        <div class="modal-content">
          <span class="close" (click)="cancel()">&times;</span>
          <h2>Ajouter un ticket de réparation</h2>
          <form [formGroup]="ticketForm" (ngSubmit)="onSubmit()">
            <label>
              Type de réparation :
              <select formControlName="type" required>
                <option *ngFor="let type of repairTypes" [value]="type">{{ type }}</option>
              </select>
            </label>
            <label>
              Lieu :
              <select formControlName="lieu" required>
                <option *ngFor="let location of locations" [value]="location">{{ location }}</option>
              </select>
            </label>
            <label>
              Ordre de priorité :
              <select formControlName="priorite" required>
                <option value="faible">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="élevée">Élevée</option>
              </select>
            </label>
            <label>
              Détails de la réparation :
              <textarea formControlName="details" rows="4" placeholder="Décrivez la réparation en détail..." required></textarea>
            </label>
            <button type="submit" class="submit-button">Valider</button>
            <button type="button" (click)="cancel()" class="cancel-button">Annuler</button>
          </form>
        </div>
      </div>

      <div *ngIf="tickets.length > 0" class="ticket-list">
        <h2>Tickets de réparation</h2>
        <ul>
          <li *ngFor="let ticket of tickets">
            <strong>{{ ticket.type }}</strong> - {{ ticket.lieu }} (Priorité: {{ ticket.priorite }})
            <p>{{ ticket.details }}</p>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .repair-container {
      padding: 20 px;
       
      text-align: left; /* Alignement à gauche */
      border: 1px solid #ccc;
      display: flex; /* Utiliser Flexbox pour l'alignement */
      flex-direction: column; 
      
    }
    .create-repair-button {
      padding: 10px 20px;
      margin-top: 20px;
      font-size: 16px;
      background-color: #007BFF; /* Couleur bleu */
      color: white; /* Texte blanc */
      border: none;
      border-radius: 5px; /* Coins arrondis */
      cursor: pointer; /* Changement du curseur */
    }
    .create-repair-button:hover {
      background-color: #0056b3; /* Couleur plus sombre au survol */
    }

    /* Styles pour le modal */
    .modal {
      display: flex;
      position: fixed; /* Positionnement fixe */
      z-index: 1000; /* Assure que le modal soit au-dessus d'autres éléments */
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto; /* Permet le défilement si nécessaire */
      background-color: rgba(0, 0, 0, 0.5); /* Fond sombre semi-transparent */
      justify-content: center; /* Centre le contenu */
      align-items: center; /* Centre verticalement */
    }
    .modal-content {
      background-color: #f9f9f9; /* Fond du modal */
      margin: auto;
      padding: 20px;
      border: 1px solid #888; /* Bordure grise */
      border-radius: 5px; /* Coins arrondis */
      width: 80%; /* Largeur du modal */
      max-width: 500px; /* Largeur maximale du modal */
      position: relative; /* Pour positionner le bouton de fermeture */
    }
    .close {
      position: absolute;
      top: 10px;
      right: 15px;
      color: #aaa; /* Couleur du bouton de fermeture */
      font-size: 28px;
      font-weight: bold;
      cursor: pointer; /* Changement du curseur */
    }
    .close:hover,
    .close:focus {
      color: black; /* Couleur au survol */
      text-decoration: none; /* Pas de soulignement */
      cursor: pointer; /* Changement du curseur */
    }
    
    label {
      display: block;
      margin: 10px 0;
    }
    select, textarea {
      padding: 8px;
      margin: 5px 0;
      width: 100%;
      max-width: 400px; /* Largeur maximale du formulaire */
    }
    textarea {
      resize: vertical; /* Permet à l'utilisateur de redimensionner le champ de texte verticalement */
    }
    .submit-button, .cancel-button {
      padding: 10px 15px;
      margin: 5px;
      font-size: 16px;
      border: none;
      border-radius: 5px; /* Coins arrondis */
      cursor: pointer; /* Changement du curseur */
    }
    .submit-button {
      background-color: #28a745; /* Couleur verte */
      color: white; /* Texte blanc */
    }
    .cancel-button {
      background-color: #dc3545; /* Couleur rouge */
      color: white; /* Texte blanc */
    }
    .ticket-list {
      margin-top: 20px;
    }
    .ticket-list ul {
      list-style-type: none;
      padding: 0;
    }
    .ticket-list li {
      margin: 10px 0;
      padding: 10px;
      background-color: #eee; /* Fond gris clair pour les tickets */
      border-radius: 5px; /* Coins arrondis */
    }
  `]
})
export class RepairComponent {
  showForm = false; // Contrôle de la visibilité du formulaire
  ticketForm: FormGroup; // Groupe de formulaires pour le ticket de réparation
  tickets: Array<{ type: string; lieu: string; priorite: string; details: string }> = []; // Liste des tickets
  repairTypes: string[] = ['Plomberie', 'Électricité', 'Peinture', 'Menuiserie', 'Chauffage']; // Types de réparations
  locations: string[] = ['Chambre 1', 'Chambre 2', 'Couloir 1', 'Couloir 2']; // Lieux

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec des contrôles et des validateurs
    this.ticketForm = this.fb.group({
      type: ['', Validators.required],
      lieu: ['', Validators.required],
      priorite: ['faible', Validators.required],
      details: ['', Validators.required]
    });
  }

  // Gestion de la soumission du formulaire
  onSubmit() {
    if (this.ticketForm.valid) {
      this.tickets.push(this.ticketForm.value); // Ajoute le ticket à la liste
      this.resetForm(); // Réinitialise le formulaire après soumission
    }
  }

  // Gestion de l'annulation du formulaire
  cancel() {
    this.showForm = false; // Cache le formulaire
    this.resetForm(); // Réinitialise les données du formulaire
  }

  // Fonction de réinitialisation du formulaire
  resetForm() {
    this.ticketForm.reset({ priorite: 'faible' }); // Réinitialise le formulaire avec une priorité par défaut
    this.showForm = false; // Cache le formulaire
  }
}
