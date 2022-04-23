import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { meuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    meuPrimeiroComponent,
    MeuPrimeiro2Component,
  ],
  imports: [
    //quais modulos queremos importar
    //qualquer modulo declarado aqui pode ser usado em qualquer um dos declarations acima
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //cursosModule foi importado para que cursosComponent que faz parte dele seja mostrado no AppmoduleHTML 
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
