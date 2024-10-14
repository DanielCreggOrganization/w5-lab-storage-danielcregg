import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from '@ionic/angular/standalone';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonTextarea, IonicStorageModule, FormsModule],
  providers: [Storage, StorageService]
})
export class HomePage {
  key: string = '';
  value: string = '';
  output: string = '';

  constructor(private storageService: StorageService) {}

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
