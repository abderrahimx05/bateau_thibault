import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'produits',
    loadComponent: () => import('./produits/produits.page').then( m => m.ProduitsPage)
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'recettes',
    loadComponent: () => import('./recettes/recettes.page').then( m => m.RecettesPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  
];
