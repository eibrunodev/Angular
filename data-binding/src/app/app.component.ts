import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor: number = 5;
  delete: boolean = false;

  MudarValor(){
    this.valor++;
  }

  DeletComponet(){
    this.delete = true;
  }
}
