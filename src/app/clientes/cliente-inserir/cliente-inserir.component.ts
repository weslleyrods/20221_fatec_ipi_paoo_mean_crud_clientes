import { Component, EventEmitter, Output } from "@angular/core";
//import { stringify } from "querystring";

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']

})
export class ClienteInserirComponent{

  @Output()
  clienteAdicionado = new EventEmitter();

  cliente;
  nome: string;
  fone: string;
  email: string;

  onAdicionarCliente(){
      //. construir um objeto cliente que contém nome, fone e e-mail
        const cliente = {
        nome: this.nome,
        fone: this.fone,
        email: this.email,
      }
      //2. passar esse objeto como argumento para o métodod emit
      this.clienteAdicionado.emit(cliente);
  }

}
