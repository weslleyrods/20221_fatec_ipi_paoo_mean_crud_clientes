import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Cliente } from "../cliente.model";
//import { stringify } from "querystring";

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']

})
export class ClienteInserirComponent{

  @Output()
  clienteAdicionado = new EventEmitter<Cliente>();

  nome: string;
  fone: string;
  email: string;

  //v1
//   onAdicionarCliente(form: NgForm){
//       //console.log(form);
//       const cliente: Cliente = {
//         nome: form.value.nome
//         fone: form.value.fone
//         email: form.value.email
//       }
//       this.clienteAdicionado.emit(cliente)

//   }
// }

//v2
onAdicionarCliente(cliente: Cliente){
    this.clienteAdicionado.emit(cliente)
  }
}


// onAdicionarCliente(){

//   this.clienteAdicionado.emit(cliente)

//   //1. construir um objeto cliente que contém nome, fone e e-mail
//     const cliente: Cliente = {
//       nome: this.nome,
//       fone: this.fone,
//       email: this.email,
//     }
//   //2. passar esse objeto como argumento para o métodod emit
//   this.clienteAdicionado.emit(cliente);
// }

// }
