import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Card;
  @Output() changeTitleEvent = new EventEmitter<string>();

  changeTitle() {
    this.changeTitleEvent.emit(this.card.title);
    console.log("card button clicked: " + this.card.title);
  }
}
