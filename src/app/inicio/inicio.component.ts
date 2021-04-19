import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos: Array<Array<String>> = [
    [
      "gamincenter1-a.jpg",
      "gamincenter1-b.jpg",
      "gamincenter1-c.jpg",
      "SALA GAMER ESTILO DARK",
      "Se trata de una sala típica de gamers amantes del estilo obscuro, una verdadera experiencia en el mundo gaming.",
      "gamincenter2-a.jpg",
      "gamincenter2-b.jpg",
      "gamincenter2-c.jpg",
      "SALA GAMING ESTILO STORE",
      "Se trata de una verdadera experiencia para el gamer consumista, ya que puede adquirir productos del mundo gaming.",
      "dark",
      "dark"
    ],
    [
      "gamincenter3-a.jpg",
      "gamincenter3-b.jpg",
      "gamincenter3-c.jpg",
      "ELITE GAMING CENER",
      "uno de los mayores operadores de competiciones de videojuegos del mundo y la mayor organización de esports.",
      "gamincenter4-a.jpg",
      "gamincenter4-b.jpg",
      "gamincenter4-c.jpg",
      "VIDEOJUEGOS TOPS",
      "LOL y Fortnite lideran un mercado de juego bastante hamplio debido a las modalidades que ofrece el videojuego.",
      "dark",
      "dark"
    ],
    [
      "gamincenter5-a.jpg",
      "gamincenter5-b.jpg",
      "gamincenter5-c.jpg",
      "SALA GAMER ESTILO GREEN-DARK",
      "Se trata de una sala típica de gamers amantes del estilo verde obscuro, una gran experiencia en el mundo gaming.",
      "gamincenter6-a.jpg",
      "gamincenter6-b.jpg",
      "gamincenter6-c.jpg",
      "ESCRITORIO LEGENDARIO",
      "En el mundo gaming un escritorio legendario gamer con multiples pantallas podria ser la diferencia entre el éxito o fracaso.",
      "dark",
      "dark"
    ],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
