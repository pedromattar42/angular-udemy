import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent {
  private poupanca: number = 10
  private carteira: number = 50

  get getPoupanca(): number {
    return this.poupanca
  }

  get getCarteira(): number {
    return this.carteira
  }

  setSacar(sacar: number): number | undefined {
    console.log(sacar)

    if (isNaN(sacar) || this.poupanca < sacar) {
      return
    }
    this.poupanca -= sacar
    return this.carteira += sacar
  }

  setDepositar(depositar: number) {

    console.log(depositar)
    if (isNaN(depositar) || this.carteira < depositar) {
      return
    }

    this.carteira -= depositar
    return this.poupanca += depositar
  }
}
