import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyRate} from "../currency-rate";
import {CurrencyService} from "../currency.service";

const CurrencyData: CurrencyRate[] = [
  {whatToDo: "Buy", usd: 40, eur: 1, pln: 5},
  {whatToDo: "Sell", usd: 42, eur: 4, pln: 3},
];
@Component({
  selector: 'app-current-rate',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './current-rate.component.html',
  styleUrl: './current-rate.component.scss'
})
export class CurrentRateComponent {
  uah: any;
  constructor(private currencyService: CurrencyService) {
    this.currencyService.getExchangeRatesFor("uah").subscribe((data)=>{this.uah = data.uah})
  }

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = CurrencyData;
}
