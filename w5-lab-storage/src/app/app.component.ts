import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { inject } from '@angular/core';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  providers: [Storage, StorageService] , // Add this line
})
export class AppComponent {
  private storageService = inject(StorageService);

  constructor() {}

  // Initializing the StorageService in the ngOnInit() lifecycle hook of the root component.
  async ngOnInit() {
    await this.storageService.init();
  }
}
