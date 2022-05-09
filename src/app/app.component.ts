import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes: Cliente[] = []
  onClienteAdicionado (cliente): void{
    // ... operador  p/ aparecer a lista de clientes atual +  o novo cliente que for inserido
    this.clientes = [...this.clientes, cliente]
    //console.log(cliente);
    console.log(this.clientes);
  }
}
