import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyRate} from "../currency-rate";
import {CurrencyService} from "../currency.service";

@Component({
  selector: 'app-current-rate',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './current-rate.component.html',
  styleUrl: './current-rate.component.scss'
})
export class CurrentRateComponent {
  currencyData:CurrencyRate[]=[];
  constructor(private currencyService: CurrencyService) {

    this.currencyService.getExchangeRates().subscribe((data)=>{
      console.log(data.conversion_rates);
      this.dataSource = [
        {whatToDo: "Buy", usd: Math.round(1/data.conversion_rates.USD), eur: Math.round(1/data.conversion_rates.EUR), pln: Math.round(1/data.conversion_rates.PLN)},
        {whatToDo: "Sell", usd: Math.round(1/data.conversion_rates.USD * 1.1), eur: Math.round(1/data.conversion_rates.EUR * 1.1), pln: Math.round(1/data.conversion_rates.PLN * 1.1)},
      ];
    })
  }

  displayedColumns: string[] = ['what-to-do', 'usd', 'eur', 'pln'];
  dataSource:CurrencyRate[] = [];
}
