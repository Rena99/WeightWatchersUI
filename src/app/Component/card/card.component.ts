import { Component, OnInit } from '@angular/core';
import{Card} from 'src/app/Models/card'
import {CardService} from 'src/app/Services/card.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card={} as Card;
  constructor(private cardService: CardService) { }

  ngOnInit(): void { 
    this.cardService.getCard(sessionStorage.getItem("currentPatient")).subscribe({
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
