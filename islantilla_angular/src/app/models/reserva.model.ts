// Spring + Angular: Paso1 -> Modelo

import { Clientes } from './clientes.model';

export interface IReserva {
  hab: number;
  entrada: Date | undefined;
  cliente: Clientes | undefined;
  precio: number;
  rutaPdf: string;
  opciones: string;
  pdfbase64: string | null;
}
