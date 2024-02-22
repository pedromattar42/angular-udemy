import { Component } from '@angular/core';
import { Investiments } from '../../interfaces/investiments';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public investiments: Array<Investiments> = [
    {
      name: 'Itaú',
      value: 100
    },
    {
      name: 'Banco do Brasil',
      value: 100
    },
    {
      name: 'Nubank',
      value: 100
    },
    {
      name: 'Inter',
      value: 100
    },
  ]
}
