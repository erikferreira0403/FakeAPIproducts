import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrar = false;

  constructor() { }

  ngOnInit(): void {
  }

  functionMostrar(){
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }
}
