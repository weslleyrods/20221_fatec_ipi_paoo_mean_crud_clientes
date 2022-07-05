//import { Component, EventEmitter, Output } from "@angular/core";
import { Component, OnInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Cliente } from "../cliente.model";
import { ClienteService } from  '../cliente.service';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']

})

//TRECHO 3 da aula - projeto com injeção de dependencia
export class ClienteInserirComponent implements OnInit{

  private modo: String = "criar"
  private idCliente: string
  public cliente: Cliente
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      //console.log(paramMap);
      if(paramMap.has('idCliente')){
        this.modo = "editar"
        this.idCliente = paramMap.get("idCliente")
        this.clienteService.getCliente(this.idCliente).subscribe(dadosCli=>{
          this.cliente = {
            id: dadosCli._id,
            nome: dadosCli.nome,
            fone: dadosCli.fone,
            email: dadosCli.email
          }
        })
      }
      else{
        this.modo = "criar"
        this.idCliente=null
      }
    })
  }


  onSalvarCliente(form: NgForm){
      if(form.invalid){
        return;
      }
      if(this.modo === 'criar'){
        this.clienteService.adicionarCliente(
          form.value.nome,
          form.value.fone,
          form.value.email,
        )
        //console.log("Form está válido");
      }
      else{
        this.clienteService.atualizarCliente(
          this.idCliente,
          form.value.nome,
          form.value.fone,
          form.value.email
        )
      }
      form.resetForm()
      //console.log("Foi sim inserido");
    }
}

// TRECHO 2 da aula - Projeto usando conceito de template driven form, ou seja, sem o two way data binding
// export class ClienteInserirComponent{
//   @Output()
//   clienteAdicionado = new EventEmitter<Cliente>();

//   //Versão 1
//   onAdicionarCliente(form: NgForm){
//       if(form.invalid){
//         return;
//       }
//       //console.log(form.value);
//         const cliente: Cliente = {
//           nome: form.value.nome,
//           fone: form.value.fone,
//           email: form.value.email,
//         }
//       this.clienteAdicionado.emit(cliente);
//     }

//   //versão 2 do método onAdicionarCliente - passando o valor do objeto diretamente para o HTML
//   // onAdicionarCliente(cliente: Cliente){
//   //   this.clienteAdicionado.emit(cliente);
//   // }
// }


//1º PARTE DA AULA  - com Two Way data binding
// export class ClienteInserirComponent{
//   @Output()
//   //<> quando o objeto emitter for chamado, garantidamente tem que ser um objeto do tipo Cliente
//   clienteAdicionado = new EventEmitter<Cliente>();

// nome: string;
// fone: string;
// email: string;

//   onAdicionarCliente(){
//       //1. construir um objeto cliente que contém nome, fone e e-mail
//         const cliente: Cliente = {
//           nome: this.nome,
//           fone: this.fone,
//           email: this.email,
//         }
//       //2. passar esse objeto como argumento para o métodod emit
//       this.clienteAdicionado.emit(cliente);
//     }
// }
