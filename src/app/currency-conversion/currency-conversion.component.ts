import {Component, Input} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import Validation from "../shared/validation";

@Component({
  selector: 'app-currency-conversion',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './currency-conversion.component.html',
  styleUrl: './currency-conversion.component.scss'
})
export class CurrencyConversionComponent {

  valid: Validation = new Validation()


  @Input() exchangeRate: any;
  // convertFromValue :number | undefined;
  convertFromValue = new FormControl({validators: [Validators.required, this.valid.numberValidator]});
  currencyFrom = new FormControl('usd');
  convertToValue = new FormControl('', {validators: [Validators.required]});
  currency: string[] = ['usd', 'eur', 'pln', 'uah'];
  // currencyFrom : CurrencyOption = this.currency[0];
  currencyTo = new FormControl('uah');


  form = new FormGroup({
    enterValue: this.convertFromValue,
    convertFromCurrency: this.currencyFrom,
    result: this.convertToValue,
    convertToCurrency: this.currencyTo,
  })

  onConvertFromChange() {
    if (typeof this.convertFromValue !== "undefined") {
      this.convertToValue = this.convertFromValue * this.exchangeRate[this.currencyFrom][this.currencyTo.toUpperCase()];
    }
  }

  onConvertToChange() {
    if (typeof this.convertToValue !== "undefined") {
      this.convertFromValue = this.convertToValue * this.exchangeRate[this.currencyTo][this.currencyFrom.toUpperCase()];
    }
  }
}
