import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrentRateComponent} from "./current-rate/current-rate.component";
import {CurrencyConversionComponent} from "./currency-conversion/currency-conversion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentRateComponent, CurrencyConversionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
