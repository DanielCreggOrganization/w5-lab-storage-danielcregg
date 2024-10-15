import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { inject } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private storageService = inject(StorageService);

  constructor() {}

  // Initializing the StorageService in the ngOnInit() lifecycle hook of the root component.
  async ngOnInit() {
    await this.storageService.init();
  }
}
