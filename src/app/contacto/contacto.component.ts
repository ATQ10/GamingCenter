import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  email: String = "";
  constructor() { }
  myDate = new Date();
  suscribir():void{
    if(this.email=="")
      alert("Debe ingresar una dirección email");
    else if(this.email.includes("@")==false)
      alert("Dirección email inválida");
    else
      alert("Se ha enviado un email de confirmación a: "+this.email);
    this.email="";
  }

  ngOnInit(): void {
  }

}
