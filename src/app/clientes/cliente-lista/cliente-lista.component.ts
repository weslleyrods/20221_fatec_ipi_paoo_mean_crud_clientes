import { Component, Input, OnInit} from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  //Usado no Trecho 2  da aula - projeto com two way data binding
  // @Input()
  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService){
  }

  //OnInit utilizado porque a doc do Angular recomenda que o construtor seja utilizado somente para injeção de dependência.O método é OnInit é chamado automaticamente
  ngOnInit(): void{
    this.clientes = this.clienteService.getClientes()
  }

  //No TypeScript, implicitamente ele já cria a estratégia de ter uma variavel atribuida ao construtor para ser usada em outros métodos. Para isso, o modificador de acesso "private" foi aplicado no construtor

  /* private clienteService: ClienteService;
  constructor (clienteService: ClienteService){
    this.clienteService = clienteService;
  } */

}
