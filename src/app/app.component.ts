import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from "./helloworld/helloworld.component";
import { MinhapaginaComponent } from "./minhapagina/minhapagina.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloworldComponent, MinhapaginaComponent, CalculadoraComponent, ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conceitos-basicos';
}
