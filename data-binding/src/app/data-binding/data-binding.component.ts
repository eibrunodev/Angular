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

  getLikeAngular(){
    return true;
  }
}
