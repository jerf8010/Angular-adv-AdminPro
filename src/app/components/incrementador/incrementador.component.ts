import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
 

  @Input() btnClass: string = 'btn-primary';

  @Input('valor') progreso: number = 50;
  // @Input() progreso: number = 50;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }


  cambiarValor( valor: number ){

    if( this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if( this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.valorSalida.emit( this.progreso );
    return this.progreso = this.progreso + valor;
  }

  onChange( nuevoValor: number ){

    if( nuevoValor >= 100 ){
      nuevoValor = 100;
    }else if( nuevoValor <= 0 ){
      nuevoValor = 0;
    }
    this.valorSalida.emit( nuevoValor );
  }
}
