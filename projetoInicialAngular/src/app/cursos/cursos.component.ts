import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  //como será chamado a tag html referente a cursosComponent
  selector: 'app-cursos',
  //arquivo html representante do componente cursos
  templateUrl: './cursos.component.html',
  //seu CSS do component cursos
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  //declarando variável nomePortal e tipando ela como uma string
  nomePortal: string;

  cursos: string[];

  //injetando a classe CursosService
  constructor(private cursosService : CursosService) { 
    //chamando a variável sempre com this.
    //atribuindo um valor a ela  
    this.nomePortal = 'http://loianetraining';

    // for (let i = 0; i < this.cursos.length; i++) {
    //   let curso =  this.cursos[i];
    // }

    //var servico = new CursosService();

    //a variavel array string cursos recebe os dados do método getCursos localizado na classe cursosService
    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
