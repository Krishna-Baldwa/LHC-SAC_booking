import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-cards',
  templateUrl: './home-page-cards.component.html',
  styleUrls: ['./home-page-cards.component.css']
})
export class HomePageCardsComponent {
  image_sources:string[][] = [["./assets/lh.jpeg", "LH-240"], ["./assets/la.jfif", "LA-350"], ["./assets/lc.jpg", "LC-150"], ["./assets/lt.jpg", "LT-60"]];
  //  image_sources:string[] = ["./assets/lh.jpeg", "./assets/la.jfif", "./assets/lc.jpg", "./assets/lt.jpg"];
}
