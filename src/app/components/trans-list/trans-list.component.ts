import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TRANSACTIONS } from '../data/transactions';

@Component({
  selector: 'app-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrl: './trans-list.component.css',
})
export class TransListComponent {
  transactions: Transaction[] = TRANSACTIONS;
}
