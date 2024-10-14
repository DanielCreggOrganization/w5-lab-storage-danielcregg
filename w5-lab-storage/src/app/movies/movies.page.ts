import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonTextarea, IonList, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonTextarea,
    IonList,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule,
    FormsModule
  ],
  providers: [Storage, StorageService]
})
export class MoviesPage implements OnInit {
  private storageService = inject(StorageService);

  movieName: string = '';
  movieYear: number | null = null;
  movies: { name: string, year: number }[] = [];
  trashIcon = trashOutline;

  constructor() { }

  ngOnInit() {
    this.loadMovies();
  }

  async saveMovie() {
    if (this.movieName && this.movieYear) {
      const movie = { name: this.movieName, year: this.movieYear };
      this.movies.push(movie);
      await this.storageService.setItem('movies', this.movies);
      this.movieName = '';
      this.movieYear = null;
    }
  }

  async loadMovies() {
    const storedMovies = await this.storageService.getItem('movies');
    if (storedMovies) {
      this.movies = storedMovies;
    }
  }

  async deleteMovie(index: number) {
    this.movies.splice(index, 1);
    await this.storageService.setItem('movies', this.movies);
  }

  displayMovies() {
    this.loadMovies();
  }
}
