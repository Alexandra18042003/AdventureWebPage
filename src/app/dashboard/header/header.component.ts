import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = 'NEW ADVENTURE';
  cards: Card[] = [];
  showCard: boolean = false;
  description = "Life is a one time offer, use it well.";

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data: Card[]) => {
      this.cards = data;
    });
  };

  navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  changeTitle1(cardTitle: string) {
    this.title = cardTitle;
    console.log("header title changed");
  }
}
