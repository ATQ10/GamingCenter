import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{
nombre : string;
apellido : string;
email : string;
tel : string;
fecha : "";
descripcion : string =""; 

constructor() { 
  this.nombre = "";
  this.apellido = "";
  this.email = "";
  this.tel = "";
  this.fecha = "";
  this.descripcion = "";
}

ngOnInit(): void {
}

validar() : void {
  const nombre = document.getElementById("name");
  const apellido = document.getElementById("last-name");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
  const fecha = document.getElementById("fecha");

  let valid = true;
  let valid2 = false;

  if(this.nombre == "") {
    if(nombre) nombre.style.background = "red";
    valid = false;  
  }
  else {
    if(nombre) nombre.style.background = "white"; 
  }

  if(this.apellido == "") {
    if(apellido) apellido.style.background = "red";
    valid = false;  
  }
  else {
    if(apellido) apellido.style.background = "white";
  }
  var valoresAceptados = /^[0-9]+$/;
  if(this.tel == "") {
    if(tel) tel.style.background = "red";
    valid = false;  
  }
  else {
    if(this.tel.match(valoresAceptados)){
    alert("Teléfono no válido");
    }
    else{
      if(tel) tel.style.background = "white";
    }
  }

  if(this.fecha == "") {
    if(fecha) fecha.style.background = "red";
    valid = false;  
  }
  else {
    if(fecha) fecha.style.background = "white";
  }

  if(this.email == "") {
    if(email) email.style.background = "red";
    valid = false;  
  }
  else {
    if(this.email.includes("@")) {
      valid2 = true;
      if(email) email.style.background = "white";   
    }
  }

  if(valid) {
    if(!valid2) {
      if(email) email.style.background = "red";
      alert("Correo inválido");
      return;
    }
    this.reservar();
  }
  else {
    alert("Faltan campos por contestar");
  }
}

reservar() : void {
  alert('Gracias por su solicitud ' + this.nombre + ' ' + this.apellido + ', recibirá email con el acceso a membresía');
  this.nombre = "";
  this.apellido = "";
  this.email = "";
  this.tel = "";
  this.fecha = "";
  this.descripcion = "";
}

limpiar() : void {
  const nombre = document.getElementById("name");
  const apellido = document.getElementById("last-name");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
  const fecha = document.getElementById("fecha");

  this.nombre = "";
  this.apellido = "";
  this.email = "";
  this.tel = "";
  this.fecha = "";
  this.descripcion = "";
  
  if(nombre) nombre.style.background = "white";
  if(apellido) apellido.style.background = "white";
  if(email) email.style.background = "white";
  if(fecha) fecha.style.background = "white";
  if(tel) tel.style.background = "white";
}

}