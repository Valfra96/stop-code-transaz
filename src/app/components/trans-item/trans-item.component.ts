import { Component, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-trans-item',
  templateUrl: './trans-item.component.html',
  styleUrl: './trans-item.component.css',
})
export class TransItemComponent {
  @Input()
  transaction?: Transaction;
}
