import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './cursos';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly URL = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.URL)
    .pipe(
      delay(2000)
    );
  }

}
