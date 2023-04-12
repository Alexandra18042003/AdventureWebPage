import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Service } from 'src/app/models/service.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  cards: Card[] = [];
  enteredSearchCity: string = '';

  @Output()
  searchCityEmitter: EventEmitter<string> = new EventEmitter<string>();

  services: Service[] = [
    { title: 'TRAVEL', subtitle: 'Article title', description: 'Adventures are the best way to learn.' },
    { title: 'TRAVEL ARRANGEMENTS', subtitle: 'Article title', description: 'Adventures are the best way to learn.' },
    { title: 'OUR PROFESSIONAL GUIDE', subtitle: 'Article title', description: 'Adventures are the best way to learn.' },
    { title: 'ACTIVITIES', subtitle: 'Article title', description: 'Adventures are the best way to learn.' }
  ]

  constructor(private cardService: CardService) { }
  ngOnInit(): void {
    this.cardService.getCards().subscribe(data => {
      this.cards = data;
    });
  }

  onSearchCity() {
    this.searchCityEmitter.emit(this.enteredSearchCity);
  }
}
