import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes = []
  onClienteAdicionado (cliente): void{
    this.clientes = [...this.clientes, cliente]
    console.log(this.clientes);
    //console.log(cliente);
  }
}
