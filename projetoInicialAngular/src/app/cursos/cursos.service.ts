//O componente vai precisar de alguma informação pra mostrar na tela, como obter informações de um servidor/backend
import { Injectable } from '@angular/core';

//injectable significa que esta classe(CursosService) pode ser injetada em outra classe para que o uso dela possa ser feito
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  
  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
