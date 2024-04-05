import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, delay, map, switchMap } from 'rxjs';
import { IReserva } from 'src/app/models/reserva.model';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css'],
})
export class DetalleReservaComponent implements OnInit {
  reserva: IReserva = {
    hab: 0,
    entrada: undefined,
    cliente: undefined,
    precio: 0,
    rutaPdf: '',
    opciones: '',
    pdfbase64: null,
  };
  hab!: number;
  fechaEntrada!: Date;

  constructor(
    private reservasService: ReservasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.hab = params['hab'];
          return this.route.queryParams;
        })
      )
      .subscribe((queryParams) => {
        this.fechaEntrada = queryParams['fechaEntrada'];
        console.log('hola');
        this.obtenerDetallesDeReserva();
      });
  }

  private obtenerDetallesDeReserva() {
    ///Haremos la llamada
    this.reservasService
      .obtenerDetallesReserva(this.hab, this.fechaEntrada)
      .subscribe((data) => {
        this.reserva = data;
      });
  }
}
