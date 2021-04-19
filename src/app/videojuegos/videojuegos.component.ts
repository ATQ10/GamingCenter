import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {
  lista: Array<number> = [0,1,2,3,4,5];
  juegos: Array<Array<Array<String>>> = [
    [
      [
        "vg1.jpg",
        "GTA V",
        "Es el juego de mundo abierto más grande, más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad de un modo nuevo, mientras los jugadores entran y salen repetidamente de las vidas de los tres personajes principales."
      ],
      [
        "vg2.jpg",
        "Minecraft",
        "Es un videojuego de construcción, de tipo «mundo abierto» o sandbox."
      ],
      [
        "vg3.jpg",
        "Dead by Daylight",
        "Es un videojuego de horror multijugador en línea de 1 contra 4, en el que cuatro jugadores toman el papel de supervivientes y uno el de asesino."
      ]
    ],
    [
      [
        "vg4.jpg",
        "FIFA",
        "Es una saga de videojuegos de simulación de fútbol."
      ],
      [
        "vg5.jpg",
        "Rust",
        "Es un juego de supervivencia donde los jugadores deben recoger recursos para sobrevivir y fabricar objetos dentro del juego."
      ],
      [
        "vg6.jpg",
        "Left 4 Dead",
        "Es un videojuego cooperativo multijugador de disparos en primera persona de acción y terror situado posteriormente a una pandemia apocalíptica."
      ]
    ],
    [
      [
        "vg7.jpg",
        "Terraria",
        "Es un videojuego de mundo abierto en 2D, que además contiene elementos de construcción, exploración, aventura y combate."
      ],
      [
        "vg8.jpg",
        "Fortnite",
        "Es un juego de tipo batalla real con gráficos tipo caricaturescos en el que compiten hasta cien jugadores en solitario o en escuadrones de dos o cuatro miembros."
      ],
      [
        "vg9.jpg",
        "PUBG",
        "Es un videojuego de acción en el cual hasta 100 jugadores pelean en una Batalla Real (Battle Royale), un tipo de combate a muerte en el cual hay enfrentamientos para ser el último con vida."
      ]
    ],
    [
      [
        "vg10.jpg",
        "Battlefield",
        "Es un videojuego de guerra en primera persona, aunque también puede ponerse en tercera persona. Donde la jugabilidad se centra en el combate por equipos o facciones."
      ],
      [
        "vg11.jpg",
        "Mortal Kombat",
        "Es un videojuego de lucha con características clave, como los controles únicos de cinco botones y los movimientos sangrientos finales."
      ],
      [
        "vg12.jpg",
        "Sea of Thieves",
        "Es un nuevo tipo de juego multijugador en el que se plasma la vida pirata en estado puro."
      ]
    ],
    [
      [
        "vg13.jpg",
        "The Binding of Isaac",
        "Es un juego de acción RPG con fuertes elementos de tipo Roguelike, en el cual los niveles son generados aleatoriamente."
      ],
      [
        "vg14.jpg",
        "Resident Evil",
        "Es un videojuego del género horror de supervivencia, centrado en zombies."
      ],
      [
        "vg15.jpg",
        "Cyberpunk 2077",
        "Es un videojuego de rol en primera persona. Donde cada aspecto del jugador es personalizable."
      ]
    ],
    [
      [
        "vg16.jpg",
        "Raft",
        "Es un videojuego de supervivencia que nos pone en la piel de un náufrago en medio del océano que debe hacer todo lo posible por salir adelante sin más recursos que un pequeño bote salvavidas y un garfio de plástico."
      ],
      [
        "vg17.jpg",
        "Stardew Valle",
        "Es un juego de simulación de granja. Donde el jugador crea su personaje y recibe una granja en ruinas para comenzar."
      ],
      [
        "vg18.jpg",
        "Red Dead Redemption",
        "Es un videojuego no lineal de acción-aventura western."
      ]
    ]
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
