import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  genero: String = "";
  //Preguntas(1)/opciones(4): 
  // ¿Cuál es la capital de {{pregunta[x]}}? 
  pregunta: Array<Array<String>> = [
    ["Cuál es una saga de videojuegos de simulación de fútbol","FIFA","Rust","Terraria","Fortnite"],
    ["Cuál es un videojuego de construcción, de tipo «mundo abierto» o sandbox","GTA V","Minecraft","PUBG","Sea of Thieves"],
    ["Cuál es un videojuego del género horror de supervivencia, centrado en zombies","Resident Evil","Battlefield","Mortal Kombat","Fortnite"],
    ["Cuál es un juego de acción RPG con fuertes elementos de tipo Roguelike","Minecraft","GTA V","Rust","The Binding of Isaac"],
    ["Cuál es un videojuego no lineal de acción-aventura western","Raft","Stardew Valle","Red Dead Redemption","Cyberpunk 2077"]
  ];
  respuesta: Array<String> = [
    "FIFA","Minecraft","Resident Evil","The Binding of Isaac","Red Dead Redemption"
  ];
  eleccion: Array<String> = [];
  calificacion: String = "";
  //estilo ce colores
  estado: Array<String> = [];
  constructor() { }
  ngOnInit(): void {
    this.cleanOptions(true);
  }
  cleanOptions(arg:boolean): void{
    for (let i = 0; i < this.respuesta.length; i++) {
      if (arg) {
         this.eleccion[i] = "Ninguno";
      } 
      this.estado[i] = "dark";
    }
    this.calificacion = "";
  }
  check(): void{
    var inicio = "Faltan preguntas por responder (";
    var alerta = inicio;
    var cal = 0;
    for (let i = 0; i < this.respuesta.length; i++) {
      if (this.respuesta[i] === this.eleccion[i]) {
        cal+=2;
        this.estado[i]="success";
      } else {
        if (this.eleccion[i] === "Ninguno") {
          alerta += String(Number(i + 1) + ",");
        } else {
        this.estado[i]="danger";
        }
      }
    }
    if(inicio != alerta){
      alert(alerta.substring(0,alerta.length-1)+")");
      this.cleanOptions(false);
    }else{
      this.calificacion = "Calificacion de "+cal+"/10";
      alert(this.calificacion);
    }
  }
}
