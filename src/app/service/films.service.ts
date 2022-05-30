import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Film} from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private urlApi:string;

  constructor(private http: HttpClient) {
     this.urlApi = 'https://swapi.dev/api';
   }

   getFilm(): Observable<Film[]> {
    

    return this.http.get<Film[]>(`${this.urlApi}/films`);
    
  }
}
 

  