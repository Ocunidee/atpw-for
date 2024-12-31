import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  basket = [
    { type: '🍌', quantity: 2 },
    { type: '🍎', quantity: 11 },
    { type: '🍒', quantity: 6 },
    { type: '🌽', quantity: 3 },
    { type: '🍉', quantity: 1 }
  ]
}
