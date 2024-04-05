import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReserva } from 'src/app/models/reserva.model';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './tabla-reservas.component.html',
  styleUrls: ['./tabla-reservas.component.css'],
})
export class TablaReservasComponent implements OnInit {
  reservas: IReserva[] = [];
  loading: boolean = true;
  constructor(
    private reservasService: ReservasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getReservas();
  }

  getReservas() {
    this.loading = true;
    this.reservasService.consultarReservas().subscribe((data) => {
      this.reservas = data;
      this.loading = false;
    });
  }

  navigateTo(url: string, hab: number, entrada: Date | undefined) {
    this.router.navigate([url, hab], {
      queryParams: { fechaEntrada: entrada },
    });
  }

  navigateToFormularioReserva(
    url: string,
    hab: number,
    entrada: Date | undefined
  ) {
    this.router.navigate([url, hab], {
      queryParams: { fechaEntrada: entrada },
    });
  }

  deleteReserva(hab: number, entrada: Date | undefined) {
    this.reservasService.eliminarReserva(hab, entrada).subscribe((data) => {
      this.getReservas();
    });
  }
}
