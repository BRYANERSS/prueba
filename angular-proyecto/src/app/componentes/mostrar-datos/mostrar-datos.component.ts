import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {
  datos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDatos().subscribe(
      (respuesta) => {
        this.datos = respuesta;
        console.log('Datos recibidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
