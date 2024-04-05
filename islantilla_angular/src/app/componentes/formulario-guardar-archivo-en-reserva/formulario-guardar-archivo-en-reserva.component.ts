import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-formulario-guardar-archivo-en-reserva',
  templateUrl: './formulario-guardar-archivo-en-reserva.component.html',
  styleUrls: ['./formulario-guardar-archivo-en-reserva.component.css'],
})
export class FormularioGuardarArchivoEnReservaComponent implements OnInit {
  saveFileFormGroup: FormGroup;

  archivoBase64: string = '';

  constructor(
    private reservasService: ReservasService,
    private fb: FormBuilder
  ) {
    this.saveFileFormGroup = this.fb.group({
      habitacion: [0, [Validators.required, Validators.min(0)]],
      entrada: [null, Validators.required],
      archivo: [null, Validators.required],
    });
  }

  ngOnInit() {}

  guardarFicheroEnReserva() {
    const hab = this.saveFileFormGroup.value.habitacion as number;
    const entrada = this.saveFileFormGroup.value.entrada as Date;

    this.reservasService
      .guardarArchivoPDF(this.archivoBase64, hab, entrada)
      .subscribe({
        next: (data) => {
          // Recebis data y comfirmamos lo que sea
          console.log('Esto es lo que he guardado', data);
        },
        error: (e) => {
          console.error(e);
        },
      });
  }

  onFileSelected(event: any) {
    console.log(event);
    const file = event.target!.files[0];
    if (file) {
      // Primero nos creamos el reader
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evnt) => {
        const base64 = evnt.target!.result;
        this.archivoBase64 = base64 as string;
        console.log(this.archivoBase64);
      };
    }
  }
}
