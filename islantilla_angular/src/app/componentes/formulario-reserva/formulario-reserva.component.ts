import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IReserva } from 'src/app/models/reserva.model';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css'],
})
export class FormularioReservaComponent implements OnInit {
  reservaForm: FormGroup;
  hab!: number;
  fechaEntrada!: Date;
  editMode: boolean = false;
  mensaje: string = '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private reservasService: ReservasService
  ) {
    this.reservaForm = this.fb.group({
      habitacion: ['', Validators.required],
      fechaEntrada: [new Date(), Validators.required],
      nif: ['', Validators.required],
      precio: [0, Validators.required],
      opciones: ['', Validators.required],
    });
  }

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

        if (this.fechaEntrada) {
          console.log('Hemos pasado al edit mode');
          this.editMode = true;
          this.obtenerDetallesDeReserva();
        }
      });
  }

  private obtenerDetallesDeReserva() {
    ///Haremos la llamada
    this.reservasService
      .obtenerDetallesReserva(this.hab, this.fechaEntrada)
      .subscribe((data) => {
        // Coger los valores de la reserva que hemos iudo a buscar y guardarlas en el formulario
        this.patchReservaForm(data);
      });
  }

  private patchReservaForm(reserva: IReserva) {
    this.reservaForm.patchValue({
      habitacion: reserva.hab,
      fechaEntrada: reserva.entrada,
      nif: reserva.cliente?.nif,
      precio: reserva.precio,
      opciones: reserva.opciones,
    });
  }

  onEditReserva() {
    this.reservasService
      .editarReserva(
        this.reservaForm.value.habitacion,
        this.reservaForm.value.fechaEntrada,
        this.reservaForm.value.nif,
        this.reservaForm.value.precio,
        this.reservaForm.value.opciones
      )
      .subscribe();
  }

  onCreateReserva() {
    this.reservasService
      .createReserva(
        this.reservaForm.value.habitacion,
        this.reservaForm.value.fechaEntrada,
        this.reservaForm.value.nif,
        this.reservaForm.value.precio,
        this.reservaForm.value.opciones
      )
      .subscribe({
        next: () => {
          this.mensaje = 'Se ha creado correctamente';
        },
        error: (e) => {
          console.log(e);

          this.mensaje = e.error;
        },
        complete: () => {
          this.reservaForm.reset();
        },
      });
  }
}
