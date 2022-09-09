import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../cursos';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos!: Curso[];

  constructor(private service: CursosService) { }

  ngOnInit() {
    this.service.list().subscribe(data => this.cursos = data);
  }
}
