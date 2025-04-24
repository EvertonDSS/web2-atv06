import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public numero1: number = 0;
  public numero2: number = 0;
  public resultado: number = 0;
  public operacao: string = 'soma';

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          alert('Divisão por zero não é permitida!');
        }
        break;
    }

  }
}
