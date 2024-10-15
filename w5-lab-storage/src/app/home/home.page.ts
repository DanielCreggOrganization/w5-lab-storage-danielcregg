import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonTextarea, FormsModule, RouterLink],
})
export class HomePage {
 // These are the properties that will be bound to the input fields and the output area in the template  
  key: string = '';
  value: string = '';
  output: string = '';
  
  private storageService = inject(StorageService);
  
  constructor() {}

  async setItem() {
    await this.storageService.setItem(this.key, this.value);
    this.output = `Set ${this.key}: ${this.value}`;
  }

  async getItem() {
    const value = await this.storageService.getItem(this.key);
    this.output = `Get ${this.key}: ${value}`;
  }

  async removeItem() {
    await this.storageService.removeItem(this.key);
    this.output = `Removed ${this.key}`;
  }

  async clearStorage() {
    await this.storageService.clearStorage();
    this.output = 'Cleared all items';
  }

  async getKeys() {
    const keys = await this.storageService.getKeys();
    this.output = `Stored keys: ${keys.join(', ')}`;
  }

  async getLength() {
    const length = await this.storageService.getLength();
    this.output = `Number of key/value pairs: ${length}`;
  }

  async enumerateItems() {
    const result = await this.storageService.enumerateItems();
    this.output = result;
  }
}
