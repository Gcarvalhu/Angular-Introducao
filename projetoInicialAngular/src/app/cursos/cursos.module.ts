import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    // Declarando que CursosComponent faz parte de cursos module
    //todo componente que for criado dentro do diretório cursos será automaticamente declarado aqui
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  //Exports representa quais declarations a gente quer expor para outros módulos
  exports:[
    //no caso indico que o que será exposto é o CursosComponent
    CursosComponent
  ],
  //colocamos aqui os services 
  providers:[
    CursosService
  ]
})
//o que irei declarar no App module para abrangir o cursosComponent
export class CursosModule { }
