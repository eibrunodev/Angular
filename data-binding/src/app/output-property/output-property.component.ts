import { Component, EventEmitter, Input, Output, ViewChild,ElementRef  } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @ViewChild('campoInput') campoValorInput: ElementRef | any;

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  decrementa(){
    this.campoValorInput.nativeElement.value--;
  }

  incrementa(){
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
  }
}
