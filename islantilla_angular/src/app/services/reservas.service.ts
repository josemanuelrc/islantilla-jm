import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IReserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  private baseURL = environment.URLBack + '/reservas';

  constructor(private http: HttpClient) {}

  public guardarArchivoPDF(
    pdfBase64: string,
    hab: number,
    entrada: Date
  ): Observable<any> {
    return this.http.put<any>(
      this.baseURL + '/guardarPDFReserva/' + hab + '/' + entrada,
      { base64: pdfBase64 }
    );
  }

  public consultarReservas(): Observable<IReserva[]> {
    return this.http.get<IReserva[]>(this.baseURL + '/consultar');
  }

  public obtenerDetallesReserva(
    hab: number,
    entrada: Date
  ): Observable<IReserva> {
    return this.http.get<IReserva>(
      this.baseURL + '/consultar/' + hab + '/' + entrada,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  public editarReserva(
    hab: string,
    entrada: Date,
    nif: string,
    precio: number,
    opciones: string
  ) {
    const rutaPdf = null;
    console.log(this.baseURL + '/actualizar');

    return this.http.post<IReserva>(this.baseURL + '/actualizar', {
      hab,
      entrada,
      nif,
      precio,
      rutaPdf,
      opciones,
    });
  }

  createReserva(
    hab: string,
    entrada: Date,
    nif: string,
    precio: number,
    opciones: string
  ): Observable<IReserva> {
    const rutaPdf = null;
    return this.http.post<IReserva>(
      this.baseURL +
        '/insertar/' +
        hab +
        '/' +
        entrada +
        '/' +
        nif +
        '/' +
        precio +
        '/' +
        rutaPdf +
        '/' +
        opciones,
      {}
    );
  }

  eliminarReserva(hab: number, entrada: Date | undefined): Observable<string> {
    return this.http.post<string>(
      this.baseURL + '/eliminar/' + hab + '/' + entrada,
      {}
    );
  }
}
