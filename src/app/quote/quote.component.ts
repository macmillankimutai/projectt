import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  })
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'Never Expect Anything','Myllan',new Date(2018,6,9) ),
    new Quote(2,'Its not overcoming the fear, it is a truimph over it','Roosevelt',new Date(2018,6,5) )
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date();
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
