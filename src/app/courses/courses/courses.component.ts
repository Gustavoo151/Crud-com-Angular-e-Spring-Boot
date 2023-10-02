import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({  // Essa anotation sinaliza para o Angular que essa classe será um component
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // Normalmente inicializamos as variáveis com tipo quando elas estão vazias.
  courses$: Observable<Course[]>;  // Usar o $ é para indicar por conversão que estamos trabalhando com um observable.
    // No Angular temos sempre que inicializar o variável
  displayedColumns = ['name', 'category'];  // Declaração das colunas que vão aparecer na tabela.


  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {   // Construtor da classe para fazer injeção de depencia automatica.
    // this.courses = [];  // Pode também inicialiar assim.
    // this.coursesService = new CoursesService();  // Fazendo injeção de dependecia na mão
    this.courses$ = this.coursesService.list();  // Pegando a lista
  }

  ngOnInit(): void {

  }
}
