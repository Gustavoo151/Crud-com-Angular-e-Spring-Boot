import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';

// Classe de serviços onde ela vai forneces todos os daodos e ter as regras de negócios.

@Injectable({  // Decorator @Injectable vai fazer a injeção de dependências.
  providedIn: 'root'  // Esse project root sinaliza que a instância desse projeto vai ser fornecida na raiz do projeto. A instancia do course.service vai fica disponivel de maneira global.
})
export class CoursesService {

  private readonly API = '/assets/cursos.json'; // Essa variável API que vai ser apenas para leitura vai receber o caminho da URI desejada.


  constructor(private httpClient: HttpClient) { }  // Com isso declarado esse httpClient vai ser fornecido automaticamente para a gente só fazendo a declaração no construtor. Isso se chama injeção de depedencia.

  list() {  // Vamos retornar de uma chamada HTTP.
    return this.httpClient.get<Course[]>(this.API); // No método get vamos passar a Url ou Uri para obter os dados que precisamos.
  }

}
