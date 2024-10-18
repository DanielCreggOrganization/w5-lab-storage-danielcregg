import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // inject sortage using inject function
  private storage = inject(Storage);

  constructor() {
    this.init();
  }

  async init() {
    try {
      await this.storage.create();
    } catch (error) {
      console.error('Storage initialization error:', error);
    }
  }

  async setItem(key: string, value: any) {
    try {
      await this.storage.set(key, value);
    } catch (error) {
      console.error(`Error setting item with key ${key}:`, error);
    }
  }

  async getItem(key: string) {
    try {
      return await this.storage.get(key);
    } catch (error) {
      console.error(`Error getting item with key ${key}:`, error);
      return null;
    }
  }

  async removeItem(key: string) {
    try {
      await this.storage.remove(key);
    } catch (error) {
      console.error(`Error removing item with key ${key}:`, error);
    }
  }

  async clearStorage() {
    try {
      await this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  async getKeys() {
    try {
      return await this.storage.keys();
    } catch (error) {
      console.error('Error getting keys:', error);
      return [];
    }
  }

  async getLength() {
    try {
      return await this.storage.length();
    } catch (error) {
      console.error('Error getting storage length:', error);
      return 0;
    }
  }

  async enumerateItems() {
    try {
      let result = '';
      await this.storage.forEach((value, key, index) => {
        result += `Key: ${key}, Value: ${value}, Index: ${index}\n`;
      });
      return result;
    } catch (error) {
      console.error('Error enumerating items:', error);
      return '';
    }
  }
}
