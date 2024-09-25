import { Routes } from '@angular/router';
import { ReparationsComponent } from './reparations/reparations.component'; // Assurez-vous que le chemin est correct
import { TemperaturesComponent } from './temparatures/temparatures.component'; // Assurez-vous que le chemin est correct
import { RepairComponent } from './repair/repair.component'; // Importez le nouveau composant

export const routes: Routes = [
  { path: '', component: ReparationsComponent }, // Chemin par défaut
  { path: 'about', component: TemperaturesComponent }, // Route pour Températures
  { path: 'repair', component: RepairComponent } // Nouvelle route pour Réparations
];
