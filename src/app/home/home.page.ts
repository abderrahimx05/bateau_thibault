import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar,IonTabButton, IonIcon, IonLabel],
})
export class HomePage {
  constructor() {}
}
