import {Cliente} from "./cliente.model";
import {Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

//single source of truth
@Injectable({providedIn: 'root'})
export class ClienteService{
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();

  constructor(private httpClient: HttpClient){
  }

  // getClientes(): Cliente[]{
  //     return [...this.clientes];
  // }

  getClientes(): void{
    this.httpClient.get<{mensagem: string, clientes: any}>
    ('http://localhost:3000/api/clientes')
    .pipe(map((dados)=>{
      return dados.clientes.map((cliente)=>{
        return {
          id: cliente._id,
          nome: cliente.nome,
          fone: cliente.fone,
          email: cliente.email,
        }
      })
    }))
    .subscribe((clientes)=>{
      this.clientes = clientes
      this.listaClientesAtualizada.next([...this.clientes])
    })
}

  // adicionarCliente (nome: string, fone: string, email: string):
  // void{
  //     this.clientes.push({
  //       nome, fone, email
  //     })
  //     this.listaClientesAtualizada.next([...this.clientes])
  // }

  adicionarCliente(nome: string, fone: string, email: string): void{
    const cliente: Cliente={
      nome, fone, email
    }
    this.httpClient.post<{mensagem: string}>(
      'http://localhost:3000/api/clientes',
      cliente
    )
    .subscribe((dados)=>{
      console.log(dados.mensagem)
      this.clientes.push(cliente)
      this.listaClientesAtualizada.next([...this.clientes])
    });
  }

  getListaDeClienteAtualizadaObservable(){
    return this.listaClientesAtualizada.asObservable()
  }

  removerCliente(id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/clientes/${id}`)
    .subscribe(()=>{
      console.log(`Cliente de id:${id} removido`);
      
    })
  }
}
