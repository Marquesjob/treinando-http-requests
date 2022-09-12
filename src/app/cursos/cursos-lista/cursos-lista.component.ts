import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../cursos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit() {

    // this.service.list().subscribe(data => this.cursos = data);
    this.cursos$ = this.service.list();

  }
}
