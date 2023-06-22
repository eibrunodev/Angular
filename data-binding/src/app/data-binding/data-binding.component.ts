import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {

  url: string = 'https//bruno.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://cdn.pixabay.com/photo/2014/02/03/16/52/chain-257490_1280.jpg'
  getValor(){
    return 1;
  }

  clique(){
    alert("Clicado!!")
  }

  valorAtual: string ='';
  valorSalvo: string= '';

  isMouseOver: boolean = false;

  OnKeyUp(event: KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>event.target).value;
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMouseOnOver(){
    this.isMouseOver = !this.isMouseOver;
  }

  clickAqui(){
    alert("Clicou em mim em Bruno!!")
  }

  varInputValue: string = '';
  salvaValorValue: string = '';

  isMousePassa: boolean = false;

  valorDoInput(event:KeyboardEvent){
    this.varInputValue = (<HTMLInputElement>event.target).value;
  }

  totalValue(valor:string){
    this.salvaValorValue = valor
  }

  passaSaiMouse(){
    this.isMousePassa = !this.isMousePassa
  }

  getLikeAngular(){
    return true;
  }


  nome: string= 'Seu nome';
  nomeDoCurso: string = 'Angular';
  tipoDoCurso: string = 'Programação'
  pessoa: any = {
    nome:"Seu Nome",
    idade:20
  }
}
