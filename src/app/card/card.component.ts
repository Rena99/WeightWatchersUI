import { Component, OnInit } from '@angular/core';
import{Card} from '../Models/card'
import {CardService} from '../Services/card.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card={} as Card;
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCard(1).subscribe({
      next: card=>{
        this.card=card;
        console.log(card);
      },
      error: err=>{
        console.log(err);
      }
    })
  }

}
