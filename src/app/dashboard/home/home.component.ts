import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: Card[] = [];
  title: string = 'NEW ADVENTURE';
  searchCity: string = '';

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(data => {
      this.cards = data;
    });
  };

  getTitle(event: string) {
    this.title = event;
  }

  onSearchCityEntered(searchValue: string) {
    this.searchCity = searchValue;
    console.log(this.searchCity);
  }

}


