import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";

interface CurrencySelection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-currency-conversion',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgIf],
  templateUrl: './currency-conversion.component.html',
  styleUrl: './currency-conversion.component.scss'
})
export class CurrencyConversionComponent {
  convertFromValue :number | null  = null;
  convertToValue :number | null = null;

  currency: CurrencySelection[] = [
    {value: 'usd-0', viewValue: 'usd'},
    {value: 'eur-1', viewValue: 'eur'},
    {value: 'pln-2', viewValue: 'pln'},
    {value: 'uah-3', viewValue: 'uah'},
  ];
  choosenCurrency(converterForm: any){
    console.log(converterForm.value, converterForm.valid)
  }

  onConvertFromChange(change: number) {
    console.log(change);
    this.convertToValue = change * 2;
  }

  onConvertToChange(change: number) {
    console.log(change);
    this.convertFromValue = change / 2;
  }

}
