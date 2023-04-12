import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class CardService {

    cards: Card[] = [{
        title: 'LONDON',
        description: 'Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy. ',
        image: 'https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium'
    },
    {
        title: 'ISTANBUL',
        description: ' Located on both sides of the Bosphorus, the narrow strait between the Black Sea and the Marmara Sea, Istanbul bridges Asia and Europe both physically and culturally. ',
        image: 'https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg'
    },
    {
        title: 'NEW YORK',
        description: 'New York City is a center for media, culture, food, fashion, art, research, finance, and trade. It has one of the largest and most famous skylines on earth.',
        image: 'https://media.cntraveler.com/photos/63483e15ef943eff59de603a/16:9/pass/New%20York%20City_GettyImages-1347979016.jpg'
    },
    {
        title: 'BARCELONA',
        description: 'This beautiful city is full of what European cities are known for (outdoor markets, restaurants, shops, museums and churches).',
        image: 'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg'
    },
    {
        title: 'SAN FRANCISCO',
        description: 'San Francisco is a major city in California, the centerpiece of the Bay Area, well-known for its liberal community, hilly terrain, Victorian architecture etc.',
        image: 'https://images.ctfassets.net/bth3mlrehms2/5D89r4pwpt9FyGctr3sOcP/b5d8c3dc072812ed8c3f5381ba290fc9/Nordamerika_USA_San_Francisco_Golden_Gate_Bridge.jpg?w=3863&h=2578&fl=progressive&q=50&fm=jpg'
    },
    {
        title: 'PARIS',
        description: 'Located in the north of France on the river Seine, Paris has the well-deserved reputation of being the most beautiful and romantic of all cities.',
        image: 'https://www.visa.co.id/dam/VCOM/regional/ap/images/travel-with-visa/paris/marquee-travel-paris-800x450.jpg'
    }
    ];

    constructor() { }

    getCards(): Observable<Card[]> {
        return of(this.cards);
    }
}
