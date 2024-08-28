import {Component, Input} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import Validation from "../shared/validation";

type CurrencyOption = "usd" | "pln" | "eur" | "uah";
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
  convertFromValue :number | undefined;
  convertToValue :number | undefined;
  currencyFrom : CurrencyOption = "usd";
  currencyTo : CurrencyOption = "uah";
  currency: CurrencyOption[] = ['usd', 'eur','pln', 'uah'];

  form = new FormGroup({
    enter: new FormControl('', {validators: [Validators.required, this.valid.numberValidator]}),
    convertFrom: new FormControl(this.currency),
    result: new FormControl('', {validators: [Validators.required]}),
    convertTo: new FormControl(this.currency),
  })

  onConvertFromChange() {
    if(typeof this.convertFromValue !== "undefined") {
      this.convertToValue = this.convertFromValue * this.exchangeRate[this.currencyFrom][this.currencyTo.toUpperCase()];
    }}

  onConvertToChange() {
    if(typeof this.convertToValue !== "undefined") {
    this.convertFromValue = this.convertToValue * this.exchangeRate[this.currencyTo][this.currencyFrom.toUpperCase()];
  }}
}
