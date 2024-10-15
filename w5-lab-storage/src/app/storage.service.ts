import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = inject(Storage);
  
  constructor() {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async setItem(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async getItem(key: string) {
    return await this.storage.get(key);
  }

  async removeItem(key: string) {
    await this.storage.remove(key);
  }

  async clearStorage() {
    await this.storage.clear();
  }

  async getKeys() {
    return await this.storage.keys();
  }

  async getLength() {
    return await this.storage.length();
  }

  async enumerateItems() {
    let result = '';
    await this.storage.forEach((value, key, index) => {
      result += `Key: ${key}, Value: ${value}, Index: ${index}\n`;
    });
    return result;
  }
}
