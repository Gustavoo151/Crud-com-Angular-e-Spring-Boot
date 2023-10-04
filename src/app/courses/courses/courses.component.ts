import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  // Essa anotation sinaliza para o Angular que essa classe será um component
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // Normalmente inicializamos as variáveis com tipo quando elas estão vazias.
  courses$: Observable<Course[]>; // Usar o $ é para indicar por conversão que estamos trabalhando com um observable.
  // No Angular temos sempre que inicializar o variável
  displayedColumns = ['name', 'category']; // Declaração das colunas que vão aparecer na tabela.

  // coursesService: CoursesService;

  constructor(
    public dialog: MatDialog, // Isso serve para o pop-pup do dialog
    private coursesService: CoursesService
  ) {
    // Construtor da classe para fazer injeção de depencia automatica.
    // this.courses = [];  // Pode também inicialiar assim.
    // this.coursesService = new CoursesService();  // Fazendo injeção de dependecia na mão
    this.courses$ = this.coursesService
      .list() // Pegando a lista
      .pipe(
        catchError((error) => {
          this.onError('Erro ao carregar cursos.');
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}
}
